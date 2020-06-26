import React from 'react';
import history from '../../../history'
import Header from '../../SecondPage/Header'
import EventNav from './EventNav'
import Events from './Events';
import AddEvent from './AddEvent';
import  './event.css';
class MyEvents extends React.Component{
  state = {
    events: [ ]
  }

  deleteEvent = (id) => {
    const events = this.state.events.filter(event => {
      return event.id !== id
    });
    this.setState({
     events
    })
  }

  addEvent = (event) => {
    event.id = Math.random();
    let events = [...this.state.events, event];
    this.setState({
      events
    })
  }
  
  render () {
    return (
      <div>
        <Header />
        <nav><EventNav /></nav>
        <div className="todo-container">
          <h1 className="todo-header">My Event's</h1>
          <Events events={this.state.events} deleteEvent={this.deleteEvent} />
          <AddEvent addEvent={this.addEvent} />
          <div>
            <button
              className="cancel-btn"
              onClick={() => history.push("/dash/note")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyEvents;