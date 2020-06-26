import React from "react";
import Todo from "../images/Rectangle 3.1.png";
import './home.css';

const FirstSection = () => {
  return (
    <div id="first-section">
      <div id="first-section-box">
        <p className="first-section-text">
          You can't really
          <br /> manage time, but you <br />
          can take small steps
          <br /> that count on a long
          <br /> run.
        </p>
        <div className="first-cards-box">
          <div className="first-cards">
            <img src={Todo} alt="A todo img" />
            <p className="img-tag">track your TODOS status</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
