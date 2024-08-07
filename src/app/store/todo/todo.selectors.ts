// src/app/store/todo/todo.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from './todo.reducer';

export const selectTodoState = createFeatureSelector<Todo[]>('todos');

export const selectTodos = createSelector(
  selectTodoState,
  (state: Todo[]) => state
);
