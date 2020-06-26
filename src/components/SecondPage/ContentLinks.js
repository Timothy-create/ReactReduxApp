import React from "react";
import { Link } from "react-router-dom";
import "./secondPage.css";

import EditLogo from "../images/edit.png";
import DeleteIcon from "../svg/DeleteIcon";
import PrintLogo from "../svg/PrintIcon";
// import Archive from "../svg/ArchiveIcon";
import ArchiveIcon from "../svg/ArchiveIcon";

const ContentLinks = () => {
  return (
    <React.Fragment>
      <div id="links-container">
        <ul>
          <Link to="/edit/note" id="edit-page">
            <li className="edit-page">
              <img src={ EditLogo } alt="Edit" /> Edit
              </li>
          </Link>
          <Link to="/delete/note" id="deleteNote1">
            <li>
              <DeleteIcon /> Delete
              </li>
          </Link>
          <Link to="#">
            <li>
              <PrintLogo /> Print
              </li>
          </Link>
          <Link to="#">
            <li>
             <ArchiveIcon /> Archive
              </li>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ContentLinks;
