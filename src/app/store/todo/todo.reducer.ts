// src/app/store/todo/todo.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from './todo.actions';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title }) => [
    ...state,
    { id: state.length + 1, title, completed: false }
  ]),
  on(removeTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleTodo, (state, { id }) => state.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ))
);

export function todoReducer(state: Todo[] | undefined, action: Action<string>) {
  return _todoReducer(state, action);
}
