import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../subject.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-angular-http-auth',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './angular-http-auth.component.html',
  styleUrls: ['./angular-http-auth.component.css'], 
})
export class AngularHttpAuthComponent implements OnInit {

  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getmethod();
    this.postmethod();
    // Example Observable
    // const myobs$ = new Observable((myobs) => {
    //   console.log('My Observable');
    //   myobs.next('200');
    //   setTimeout(() => {
    //     myobs.next('400');
    //   }, 400);
    //   console.log('end observable');
    // });

    // myobs$.subscribe(
    //   (obs) => {
    //     console.log(obs);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  name = 'Http Authentication';
  todo: any = [];

  public getmethod() {
    this.http
      .get<Todo>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => (this.todo = console.log(data)));
  }

  public postmethod() {
    this.http
      .get<Todo>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => (this.todo = console.log(data)));
  }
}
