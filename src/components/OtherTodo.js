import React from 'react';
import { toggleTodo } from '../redux/actions'
import cx from "classnames";
import { connect } from 'react-redux';

class OtherTodo extends React.Component {
  render() {
    return <li
      className="todo-item"
      onClick={() => {
        this.props.toggleTodo(this.props.todo.id)
      }}>
        <span
          className={cx(
            "todo-item__text",
            this.props.todo && this.props.todo.completed && "todo-item__text--completed"
          )}
        >
          {this.props.todo.content}
        </span>
      </li>
  }
}

export default connect(
  null,
  { toggleTodo }
)(OtherTodo);