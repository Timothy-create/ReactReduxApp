import React from 'react';
import history from '../../../history';
import Header from '../../SecondPage/Header';
import ArchiveNav from './ArchiveNav';
import '../Events/event.css';

const Archive = () => {
  return (
    <div>
      <Header />
      <nav><ArchiveNav /></nav>
        <div className="archive-box">
          <h1 className="todo-header">Archives</h1>
          <h3 className="sub-title">
            Number of Archives: <span className="zero">0</span>
          </h3>
            <button
              className="cancel-btn arch"
              onClick={() => history.push("/dash/note")}>
              Note Page
            </button>
        </div>
    </div>
  );
}

export default Archive;