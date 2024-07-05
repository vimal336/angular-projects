import { todo } from "../todo.model";
import { Store } from "@datorama/akita";

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

@StoreConfig()

export class TodoStore extends Store<TodoState>{
    constructor(){
        super(getInitialState());

    }
}
