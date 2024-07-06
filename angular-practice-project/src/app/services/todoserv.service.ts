import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { todo } from '../todo.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})


export class TodoservService{
  private readonly baseurl = environment.baseurl;

  constructor(private http: HttpClient) {

   }

   addTodo(name:string, job:string):Observable<todo>{
    return this.http.post<todo>(this.baseurl, { name, job });
   }

   getTodos(): Observable<todo[]> {
    return this.http.get<{ data: todo [] }>(this.baseurl).pipe(
    map ((res:{data: todo []}) => res.data)
    );
  }

    deleteTodo(id: string): Observable<todo> {
      return this.http.delete<todo>(`${this.baseurl}/${id}`);
    }

    updateTodo(id: string, changes:todo): Observable<todo> {
      return this.http.put<todo>(`${this.baseurl}/${id}`,changes );
    }
  
}