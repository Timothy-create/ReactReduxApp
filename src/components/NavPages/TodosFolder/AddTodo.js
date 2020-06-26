import React, { Component } from 'react';
import './mytodo.css';
export class AddTodo extends Component {
  state = {
    title: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({title: ""})
  }

  render () {
    return (
      <div>
        <form style={{ display: " flex" }} onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            style={{ flex: "10", padding: "5px" }}
            value={ this.state.title }
            onChange={ this.handleChange }
            className="input-box-todo"
          />
          <input
            type="submit"
            value="Submit"
            className="inputBtn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}
 
export default AddTodo;
