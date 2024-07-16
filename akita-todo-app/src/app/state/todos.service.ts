import { Injectable } from '@angular/core';
import { TodosStore } from './todos.store';
import { Todo } from './todo.model';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private todosStore: TodosStore) {}

  add(todo: Todo) {
    this.todosStore.add(todo);
  }

  update(id: ID, todo: Partial<Todo>) {
    this.todosStore.update(id, todo);
  }

  remove(id: ID) {
    this.todosStore.remove(id);
  }
}
