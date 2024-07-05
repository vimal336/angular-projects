import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todo } from '../todo.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoservService {

  constructor(private http: HttpClient) {

   }

   addTodo(title:string, description:string):Observable<todo>{
    return this.http.get()
   }
}
