import React from "react";
import ReactDOM from "react-dom";
import history from "../../../history";
import './modal.css';

const SecondModal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={ props.onDismiss }>
      <div onClick={ (e) => e.stopPropagation() }>
        <div className="edit-modal">
          <div>
            <div onClick={ () => history.push("/dash/note") }>{ props.editCloseBtn }</div>
          </div>
          <div className="modal_content">
            { props.title }
            { props.tag }
            { props.note }
            { props.editBtn }
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default SecondModal;
