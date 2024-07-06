import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoservService } from '../services/todoserv.service';
import { TodoStore } from '../store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  form: FormGroup | undefined;
  loading: false | undefined;
  
  constructor(private todoserv:TodoservService,
              private todoStore: TodoStore,
              private router: Router){

  }
  ngOnInit(): void {
   this.form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    job: new FormControl(null, [Validators.required])
   })
  }

  addTodo(): void {
    if (this.form?.valid) {
      console.log(this.form.value);
      this.todoStore.setLoading(true);
      this.todoserv.addTodo(this.form.controls['name'].value, this.form.controls['job'].value)
        .subscribe(res => {
          this.todoStore.update(state => ({
            todos: [
              ...state.todos,
              res
            ]
          }));
          this.todoStore.setLoading(false); 
        }, error => {
          console.error(error);
          this.todoStore.setLoading(false); 
        });
    }
  }
}
