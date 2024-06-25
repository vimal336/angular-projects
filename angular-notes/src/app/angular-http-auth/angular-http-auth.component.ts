import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '../subject.interface';
import { Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-http-auth',
  templateUrl: './angular-http-auth.component.html',
  styleUrl: './angular-http-auth.component.css'
})
export class AngularHttpAuthComponent {
 name = "Http Authentication";
 todo: any; 
 
constructor(private http: HttpClient){
  this.http.get<Todo>("https://jsonplaceholder.typicode.com/posts/1").subscribe(data => this.todo = data)
}

}
