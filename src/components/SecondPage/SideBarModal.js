import React from "react";
import { Link } from 'react-router-dom';
import "./secondPage.css";
//import DeleteIcon from '../svg/DeleteIcon'
//import PrintLogo from '../svg/PrintIcon'
// Archive from '../svg/ArchiveIcon'
import DeleteIcon from '../images/delete.png'
import PrintLogo from '../images/print.png'
import Archive from '../images/archieve.png'
import EditLogo from "../images/edit.png";


const SideBarModal = (note,props) => {
  return (
    <div id="modal-container">
      <ul>
        <Link to="/edit/note" id="edit-page">
          <li className="edit-page">
            <img src={ EditLogo } alt="Edit" /> Edit
          { note =props.note}
          </li>
        </Link>

        <Link to="/delete/note" id="deleteNote1">
          <li>
            <img src={DeleteIcon} alt="Delete" /> Delete
          </li>
        </Link>

        <Link to="#">
          <li>
            <img src={PrintLogo} alt="PrintIcon" /> Print
          </li>
        </Link>

        <Link to="#">
          <li>
            <img src={Archive} alt="Archive" /> Archive
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBarModal;
