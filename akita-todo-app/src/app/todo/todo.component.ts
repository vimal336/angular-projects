import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../state/todo.model';
import { TodosQuery } from '../state/todos.query';
import { TodosService } from '../state/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  todos$: Observable<Todo[]> | undefined;
  newTodoTitle = '';

  constructor(private todosQuery: TodosQuery, private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosQuery.selectAll();
  }

  addTodo() {
    const newTodo: Todo = {
      id: Math.random(),
      title: this.newTodoTitle,
      completed: false
    };
    this.todosService.add(newTodo);
    this.newTodoTitle = '';
  }

  toggleComplete(todo: Todo) {
    this.todosService.update(todo.id, { completed: !todo.completed });
  }
  
  remove(todo: Todo) {
    this.todosService.remove(todo.id);
  }
}

