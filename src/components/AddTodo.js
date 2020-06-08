import React from 'react';
import { addTodo } from '../redux/actions';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({input: input})
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return <div>
      <input
        onChange={e => this.updateInput(e.target.value)}
        value={this.state.input}
      />
      <button className="add-todo" onClick={this.handleAddTodo}>
        Submit
      </button>
    </div>
  }
}

export default connect(
  null,
  { addTodo },
)(AddTodo);