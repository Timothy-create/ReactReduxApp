import React from "react";
import history from "../../../history";
import SecondModal from "./SecondModal";
import SecondPage from "../SecondPage";
import Backdrop from "../../Backdrop/Backdrop";
import "./modal.css";

import { connect } from "react-redux";
import { addNote } from "../../../actions";
import {v1 as uuidv1} from 'uuid'

const editCloseBtn = () => {
  return (
    <div className="edit-header">
      <p className="edit">Write a note</p>
      <p className="edit-close-btn">X</p>
    </div>
  );
};

class CreateNoteModal extends React.Component {
  state = {
    title: "",
    content: "",
    id: uuidv1()
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      id: this.state.id
    };
    this.props.addNote(newNote);
    history.push("/dash/note");
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
          placeholder="Note title"
        />
      </div>
    );
  };
  note = () => {
    return (
      <div>
        <label>
          <h5>Note</h5>
        </label>
        <textarea
          type="text"
          name="content"
          onChange={this.handleChange}
          value={this.state.content}
          placeholder="Note body"
          className="note-box"
          id="content"
        />
      </div>
    );
  };
  editBtn = () => {
    return (
      <div className="edit-btn-box">
        <div>
          <button className="create-btn" onClick={this.handleClick}>
            Create
          </button>
        </div>
      </div>
    );
  };

  // componentDidMount () {
  //   CKEDITOR.replace('content')
  // }
  render() {
    //  CKEDITOR.replace('content');
    return (
      <div>
        <SecondPage />
        <Backdrop onClick={() => history.push("/dash/note")} />
        <div className="create-modal">
          <SecondModal
            editCloseBtn={editCloseBtn()}
            title={this.title()}
            // tag={tag()}
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

export default connect(mapStateToProps, { addNote })(CreateNoteModal);
