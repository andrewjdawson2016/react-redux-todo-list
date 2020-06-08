import { VISIBILITY_FILTERS } from '../constants';

export const getTodosState = store => store.todos;

export const getTodosList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id: id } : {};
  
export const getTodos = store =>
  getTodosList(store).map(id => getTodoById(store, id))

export const getTodosByVisibilityFilter = (store, filter) => {
  const allTodos = getTodos(store);
  switch (filter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.PENDING:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};