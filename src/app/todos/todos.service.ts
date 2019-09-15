import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoItem } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Subject<TodoItem>;
  
  public AddTodoItem(todoItem: TodoItem) {
    this.todos.next(todoItem);
  }

}
