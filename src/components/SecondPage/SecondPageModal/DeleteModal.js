import React from 'react';
import history from "../../../history";
import { connect } from 'react-redux'
//import { deleteNote } from '../../../actions'
import DeleteModalBox from './DeleteModalBox';
import SecondPage from '../SecondPage';
import Backdrop from '../../Backdrop/Backdrop';
import './modal.css';
import Warning from "../../images/warning.png";
import {deleteNote} from '../../../actions'


const closeBtn = () => <div className="close-btn">X</div>;
 

 const logo = () => (
   <div className="warning">
     <img src={Warning} alt="Warning logo" />
   </div>
 );



class DeleteModal extends React.Component {
  handleDelete = (id) => {
    if (this.props.note.id) {
       this.props.deleteNote(this.props.note.id);
    }
   
    this.props.history.push("/dash/note");
  };
  btn = () => {
    return (
      <div className="btn-box">
        <div>
          <button
            className="cancel-btn"
            onClick={() => history.push("/dash/note")}>
            Cancel
          </button>
        </div>
        <div>
          {/* <button className="delete-btn" onClick={() => this.handleClick}>
            Delete
          </button> */}
          <button className="delete-btn" onClick={this.handleDelete}>
            DELETE NOTE
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { note } = this.props;

    return (
      <div>
        <SecondPage />
        <Backdrop onClick={() => history.push("/dash/note")} />
        <div className="modal-second">
          <DeleteModalBox
            closeBtn={closeBtn()}
            logo={logo()}
            details="Are you sure you want to delete this note?"
            btn={this.btn()}
          />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     note: state.selectedNote
//   }
// }

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.note_id;

  return {
    note: state.notes.notes.find((note) => note.id == id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => {
      dispatch(deleteNote(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);