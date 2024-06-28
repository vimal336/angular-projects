import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    this.putMethod();
    this.deleteMethod();
  }

  todo: any;
  postResponse: any;
  putResponse: any;
  deleteResponse: any;
  

  getmethod() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => this.todo = data);
  }
  


 
  postmethod() {
    const headers  = new HttpHeaders({
      'contentType':'application/json'
    })
    let bod = {
      title: 'fooh',
      body: 'bar',
      userId: 101,
      id:1,
      }
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',bod,{headers})
      .subscribe((data) => this.postResponse =  data );
  }

  putMethod() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let body = {
      title: 'updated title',
      body: 'updated body',
      userId: 101,
      id: 1,
    };
    this.http
      .put('https://jsonplaceholder.typicode.com/posts/1', body, { headers })
      .subscribe((data) => this.putResponse = data);
  }

  deleteMethod() {
    this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => this.deleteResponse = data);
  }

  


}
