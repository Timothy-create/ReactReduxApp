import React from 'react';
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'

import NoteList from './NoteList'
import SecondPage from '../components/SecondPage/SecondPage';
import  "../components/SecondPage/secondPage.css";
import { DELETE_NOTE } from '../actions/type';
import {deleteNote} from '../actions'
import SideBarLinks from '../components/SecondPage/SideBarLinks';
import EditModal from '../components/SecondPage/SecondPageModal/EditModal';
import Header from '../components/SecondPage/Header';
import Nav from '../components/SecondPage/Nav';
import Spinner from './Spinner'
import './note.css'
import ContentModal from '../components/SecondPage/ContentModal';

import EditLogo from "../components/images/edit.png";
import DeleteIcon from "../components/svg/DeleteIcon";
import PrintLogo from "../components/svg/PrintIcon";
// import Archive from "../svg/ArchiveIcon";

import ArchiveIcon from '../components/svg/ArchiveIcon'




class NoteDetails extends React.Component {
  state = {
    show: false

  }

  toggleMenu = () => {
    const {show} = this.state.show
    this.setState({show:!show })
  }
  handleDelete = () => {
    this.props.deleteNote(this.props.note.id)
    this.props.history.push('/dash/note')
  }
  render () {
      const note = this.props.note ? (
        <div id="note-main-body">
          <div className="section-main-body-wrapper">
            <h2 className="noteTitle">{ this.props.note.title }</h2>
            <p className="border"></p>
            <p className="p-tag1">{this.props.note.content}</p>
            <div className="btn-box">
              <Link to="/edit/note">
                <button className="edit-btn-note">EDIT</button>
              </Link>
              <button className="delete-btn-note" onClick={this.handleDelete}>
                DELETE
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner">
          <Spinner />
        </div>
      );
       
  
   
    return (
      <div>
        <Header />
        <nav>
          <Nav />
        </nav>
       <NoteList/>
        { note }
       
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
   let id = ownProps.match.params.note_id;
  
  return {
    note: state.notes.notes.find(note => note.id == id)
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deleteNote: (id ) => {dispatch(deleteNote(id))}
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)( NoteDetails);