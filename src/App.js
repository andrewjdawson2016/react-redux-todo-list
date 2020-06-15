import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilter from './components/VisibilityFilter';
import "./style.css";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </div>
  );
}

export default App;
