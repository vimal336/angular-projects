import { Query } from "@datorama/akita";
import { TodoState, TodoStore  } from "./store";


export class TodoQuery extends Query <TodoState> {
    constructor(private todoStore: TodoStore){
        super(todoStore);
    }
}

