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
  }

  name = 'Http Authentication';
  todo: any = [];
  postResponse: any = [];

 
  public postmethod() {
    let bod = {
      title: 'fooh',
      body: 'bar',
      userId: 101,
      id:1
      };
    this.http
      .post<Todo>('https://jsonplaceholder.typicode.com/posts',bod)
      .subscribe((data) => (this.todo =  data ));
  }

  public getmethod() {
    this.http
      .get<Todo>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => (this.todo = data));
  }

}
