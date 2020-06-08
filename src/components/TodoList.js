import React from 'react';
import { connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selectors'
import OtherTodo from './OtherTodo';

class TodoList extends React.Component {
  render() {
    return <ul className="todo-list">
      {this.props.todos && this.props.todos.length ?
        this.props.todos.map(todo => {
          return <OtherTodo key={`todo-${todo.id}`} todo={todo} />;
        }) :
        "there are no todos!"
      }
    </ul>
  };
}

const mapStateToProps = function (state) {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
}

export default connect(mapStateToProps)(TodoList);