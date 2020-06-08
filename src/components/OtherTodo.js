import React from 'react';
import { toggleTodo } from '../redux/actions'
import cx from "classnames";
import { connect } from 'react-redux';

class OtherTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: props.todo
    }
  }

  render() {
    return <li
      className="todo-item"
      onClick={() => {
        this.props.toggleTodo(this.state.todo.id)
      }}>
        <span
          className={cx(
            "todo-item__text",
            this.state.todo && this.state.todo.completed && "todo-item__text--completed"
          )}
        >
          {this.state.todo.content}
        </span>
      </li>
  }
}

export default connect(
  null,
  { toggleTodo }
)(OtherTodo);