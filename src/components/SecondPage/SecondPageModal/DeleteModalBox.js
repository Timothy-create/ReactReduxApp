import React from "react";
import ReactDOM from "react-dom";
import history from "../../../history";
import "./modal.css";

const SecondModal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={ props.onDismiss }>
      <div onClick={ (e) => e.stopPropagation() }>
        <div className="modal-second">
          <div>
            <div onClick={ () => history.push("/dash/note") }>{ props.closeBtn }</div>
          </div>
          <div className="modal_content">
            <div>{ props.logo }</div>
            <p className="txt">{ props.details }</p>
          </div>
          { props.btn }
        </div>
      </div>
    </div>,
    document.querySelector("#modal"),
  );
};

export default SecondModal;
