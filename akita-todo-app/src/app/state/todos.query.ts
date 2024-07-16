// src/app/state/todos.query.ts
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { TodosState, TodosStore } from './todos.store';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState, Todo> {
  constructor(protected override store: TodosStore) {
    super(store);
  }
}
