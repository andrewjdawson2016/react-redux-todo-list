import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    content: content,
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id: id,
  }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: {
    filter: filter,
  }
})