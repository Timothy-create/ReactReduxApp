import React from "react";
import { Link } from "react-router-dom";
import Eclispse from "../images/Ellipse 16.png";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <img src={Eclispse} alt="dot" className="ellipse" />
          <div className="sixty">
            <Link to="/aboutpage">3Sixty</Link>
          </div>
        </div>
        <div className="modal-btn">
          <div id="login">
            {" "}
            <p className="login-btn">
              <Link to="#">Login </Link>
            </p>
          </div>
          <div id="sign">
            <p className="signUp-btn">
              <Link to="/">Log Out</Link>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
