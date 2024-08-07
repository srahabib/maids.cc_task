import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { addTodo, removeTodo, toggleTodo } from '../store/todo/todo.actions';
import { selectTodos } from '../store/todo/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos$: Observable<any[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = store.select(selectTodos);
  }

  addTodo(title: string) {
    this.store.dispatch(addTodo({ title }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }
}
