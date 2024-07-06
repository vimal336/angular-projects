import { Query } from "@datorama/akita";
import { TodoState, TodoStore  } from "./store";
import { Observable } from "rxjs";
import { todo } from "../todo.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // This makes the service available application-wide
  })
  
export class TodoQuery extends Query <TodoState> {
    constructor(private todoStore: TodoStore){
        super(todoStore);
    }

getTodos(): Observable <todo[]>{
    return this.select(state => state.todos);
}


getLoaded(): Observable<boolean> {
    return this.select( state => state.isLoaded);
}


getLoading(): Observable<boolean> {
    return this.selectLoading();
    }
}



