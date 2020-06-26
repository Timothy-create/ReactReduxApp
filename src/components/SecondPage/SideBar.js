import React from 'react';
import SideBarLinks from './SideBarLinks';

const SideBar = () => {
  return (
    <div id="section-nav">
      <div className="first-section-nav side-bar">
        <h4>10 Hours Fasting Every Week</h4>
        <p className="p-tag">
          Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
          elit incididunt irure nisi duis aliquip anim velit. Officia laborum
          consectetur quis ea pariatur proident exercitation.
        </p>
        <SideBarLinks text="Personal" />
      </div>
      <p className="border"></p>
      <div className="second-section-nav side-bar">
        <h4>Visit Plateau State</h4>
        <p className="p-tag">
          Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
          elit incididunt irure nisi duis aliquip anim velit. Officia laborum
          consectetur quis ea pariatur proident exercitation.
        </p>
        <SideBarLinks text="Travel" />
      </div>
      <p className="border"></p>
      <div className="third-section-nav side-bar">
        <h4>Birthday Debrief</h4>
        <p className="p-tag">
          Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
          elit incididunt irure nisi duis aliquip anim velit. Officia laborum
          consectetur quis ea pariatur proident exercitation.
        </p>
        <SideBarLinks text="Personal" />
      </div>
      <p className="border"></p>
      <div className="fourth-section-nav side-bar">
        <h4>Learn Darts</h4>
        <p className="p-tag">
          Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
          elit incididunt irure nisi duis aliquip anim velit.
        </p>
        <SideBarLinks text="Personal" />
      </div>
      <p className="border"></p>
    </div>
  );
}

export default SideBar;