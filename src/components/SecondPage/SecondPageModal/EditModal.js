import React, {useContext,useReducer} from "react";
import history from "../../../history";
import SecondModal from "./SecondModal";
import SecondPage from "../SecondPage";
import Backdrop from "../../Backdrop/Backdrop";
import "./modal.css";
import { editNote } from '../../../actions'
import {connect} from 'react-redux'


class EditModal extends React.Component {
  state = {
   // title: this.title,
    //content: this.context,
    title: this.props.notes,
    content: this.props.notes.notes
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      id: this.state.id,
    };
    this.props.editNote(newNote);
    history.push("/dash/note");
  };
  editCloseBtn = () => {
    return (
      <div className="edit-header">
        <p className="edit">Edit note</p>
        <p className="edit-close-btn">X</p>
      </div>
    );
  };

  editBtn = (props) => {
    return (
      <div className="edit-btn-box">
        <div>
          <button onClick={this.handleClick} className="edit-edit-btn">
            Edit
          </button>
        </div>
        <div>
          <button
            className="edit-cancel-btn"
            onClick={() => history.push("/dash/note")}>
            Cancel
          </button>
        </div>
      </div>
    );
  };

  title = () => {
    return (
      <div className="title-box">
        <label>
          <h5>Title</h5>
        </label>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
      </div>
    );
  };

  note = (props, note) => {
    return (
      <div>
        <label>
          <h5>Note</h5>
        </label>
        <textarea
          className="note-box"
          type="text"
          name="content"
          onChange={this.handleChange}
          value={this.state.content}
        />
      </div>
    );
  };

  render() {
    return (
      <div>
        <SecondPage />
        <Backdrop onClick={() => history.push("/dash/note")} />
        <div className="edit-modal">
          <SecondModal
            editCloseBtn={this.editCloseBtn()}
            title={this.title()}
            note={this.note()}
            editBtn={this.editBtn()}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { editNote })(EditModal);

