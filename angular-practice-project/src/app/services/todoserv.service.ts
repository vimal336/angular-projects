import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todo } from '../todo.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoservService {
  private readonly baseUrl = environment.baseurl;


  constructor(private http: HttpClient) {

   }

   addTodo(name:string, job:string):Observable<todo>{
    return this.http.get()
   }
}
