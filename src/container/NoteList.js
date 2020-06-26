
import React from "react";
import { connect } from "react-redux";
import { selectNote, deleteNote } from "../actions";
import "../components/SecondPage/secondPage.css";
import {Link } from 'react-router-dom'

class NoteList extends React.Component {
  handleDelete = (id) => {
    this.props.deleteNote(id);
  };

  

  componentDidMount (id) {
 
    
      this.props.selectNote(id);
    
  }

  handleSelect = (id) => {
     this.props.selectNote(id);
  }
  render () {
    const { notes } = this.props
    const noteList = notes.length ? (
      notes.map(note => {
        return (
          <div id="note-container">
            <div key={note.id} className="side-bar">
              <h4>{note.title}</h4>
              <div className="personal-left">
                <p className="hours-style">23 Hours ago</p>
                <Link to={"/" + note.id}>
                  <button className="note-btn">Read Note!!!</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })
    ): (
      <div>No note yet, kindly add new note</div>
    )
    return (
      <div>
        <h2 className="note-header">List of note's</h2>
        <div id="note-container1">{noteList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes
  };
 
};

export default connect(mapStateToProps, {
  selectNote,
  deleteNote
})(NoteList);