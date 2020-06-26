import React, { Component } from 'react';
import './mytodo.css';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px solid #ccc",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }
  render () {
    const {id, title} = this.props.todo
    return (
      <div style={this.getStyle()} className="input-text">
        <h2>
          <input type="checkbox"  onChange={this.props.markComplete.bind(this, id)} className="checkbox"/>{' '}
          { title }
          <button className="btnStyle" onClick={this.props.handleDelete.bind(this, id)}>x</button>
        </h2>
      </div>
    );
  }
}

export default TodoItem;
