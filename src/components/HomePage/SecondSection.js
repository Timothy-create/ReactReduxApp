import React from 'react';
import logo from '../images/Component 11.png';
import Coding from "../images/Rectangle 3.2.png";
import Gym from "../images/Rectangle 3.png";

const SecondSection = () => {
  return (
    <div id="second-section">
      <div className="second-section-ul">
        <div id="list1">
          <span className="lists1">
            <img src={ logo } alt="logo" />
          </span>{" "}
          Track your daily activities
        </div>
        <div id="list2">
          <span className="lists2">
            <img src={ logo } alt="logo" />
          </span>{" "}
          Save important note or code snippets you're likely to reuse.
        </div>
        <div id="list3">
          <span className="lists3">
            <img src={ logo } alt="logo" />
          </span>{" "}
          Keep a dairy of your daily activities
        </div>
      </div>
      <div className="second-section-container">
        <div className="second-section-box">
          <div className="second-cards">
            <img src={ Coding } alt="A coding img" />
            <p className="img-tag">Jot down resuable code snippets</p>
          </div>
        </div>
        <div className="third-section-box">
          <div className="third-cards">
            <img src={ Gym } alt="A gym img" />
            <p className="img-tag">Jot down your daily activities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
