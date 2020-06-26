import React, { useState } from "react";
import SideBarModal from "./SideBarModal";
import DotsIcon from '../images/dots2.png';


const SideBarLinks = ({text, note}) => {
// class SideBarLinks extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: false };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }

  // toggleMenu = () => {
    
  //   this.setState({ show: !show });
  // };

 const [show, noshow] = useState(false);

    return (
      <div>
        <div className="second-section-links">
          <p className="personal"> {text}</p>
          <div className="personal-left">
            <p className="hours-style">23 Hours ago</p>
            <p className="dots" id="dots" onClick={() => noshow(show => !show) }>
              <img src={DotsIcon} alt="Dots icon" />
            </p>
          </div>
        </div>
        <div>
          <div> {show && <SideBarModal note={note} />}</div>
        </div>
      </div>
    );
  }

export default SideBarLinks;
