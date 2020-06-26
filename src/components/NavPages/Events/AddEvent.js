import React from 'react';
import './event.css'
class AddEvent extends React.Component {
  state = { 
    content: ""
  }
  
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addEvent(this.state)
    this.setState({
      content: ""
    })
  }
  render() { 
    return ( 
      <div className="todo-input">
        <form onSubmit={ this.handleSubmit }>
          <label>Add new event:</label>
          <input type="text" onChange={ this.handleChange } value={ this.state.content } className="event-input" />
        </form>
      </div>
     );
  }
}
 
export default AddEvent;