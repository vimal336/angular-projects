import { Inject, Injectable } from "@angular/core";
import { todo } from "../todo.model";
import { Store, StoreConfig } from "@datorama/akita";

export interface TodoState{
    todos: todo[];
    isLoaded : boolean;

}


export const getInitialState = () => {
    return {
    todos: [],
    isLoaded: false,
    };
    };

    @Injectable({
        providedIn : 'root'
    })

@StoreConfig(  {name: 'todo'})

export class TodoStore extends Store<TodoState>{
    constructor(){
        super(getInitialState());

    }
}
