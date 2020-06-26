import React from "react";
import history from "../../../history";
import DeleteModalBox from "../../SecondPage/SecondPageModal/DeleteModalBox";
import Header from "../../SecondPage/Header";
import SettingNav from './SettingNav'
import Warning from "../../images/warning.png";
import "../../SecondPage/SecondPageModal/modal.css";

  const closeBtn = () => <div className="close-btn">X</div>;

  const logo = () => (
    <div className="warning">
      <img src={Warning} alt="Warning logo" />
    </div>
  );

  const btn = () => {
    return (
      <div className="btn-box">
        <div>
          <button
            className="cancel-btn"
            onClick={() => history.push("/dash/note")}>
            Reset
          </button>
        </div>
        <div>
          <button
            className="delete-btn"
            onClick={() => history.push("/dash/note")}>
            Cancel
          </button>
        </div>
      </div>
    );
  };

const Settings = () => {
  return (
    <div>
      <Header />
      <nav>
        {" "}
        <SettingNav />{" "}
      </nav>
      <div className="modal-second">
        <DeleteModalBox
          closeBtn={closeBtn()}
          logo={logo()}
          details="Are you sure you want to reset this note?"
          btn={btn()}
        />
      </div>
    </div>
  );
}

export default Settings;
