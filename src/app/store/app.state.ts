// src/app/store/app.state.ts
import { ActionReducerMap } from '@ngrx/store';
import { Todo, todoReducer } from './todo/todo.reducer';

export interface AppState {
  todos: Todo[];
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
};
