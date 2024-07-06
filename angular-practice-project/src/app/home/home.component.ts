import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoQuery } from '../store/query';
import { TodoStore } from '../store/store';
import { filter, switchMap, take } from 'rxjs';
import { state } from '@angular/animations';
import { TodoservService } from '../services/todoserv.service';
import { todo } from '../todo.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loading = false;
  todos:any = []
  constructor(private router: Router,
              private todoQuery: TodoQuery,
              private todoStore: TodoStore,
              private todoServ: TodoservService
  ){

  }
  ngOnInit(): void {
   this.todoQuery.getLoading().subscribe(res => this.loading = res);
   this.todoQuery.getTodos().subscribe(res => this.todos = res);
   this.todoQuery.getLoaded().pipe( take(1),
   filter(res => !res),
   switchMap( () => {
    this.todoStore.setLoading(true);
    return this.todoServ.getTodos();
   })

   ).subscribe( res => {
    this.todoStore.update(state => {
      return {
        todos: res
      };
    });
    this.todoStore.setLoading(false);
   }, err => {
    console.log(err)
   });

  }
addTodo(){
  this.router.navigateByUrl('/add-todo')
}
}
