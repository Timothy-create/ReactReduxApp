import React from "react";
import ContentLinks from "./ContentLinks";
import './secondPage.css'

import DotsIcon from '../images/dots.png';
import PlusIcon from '../images/plus2.png';
import MinusIcon from '../images/minus.png';
import LineIcon from '../images/Line 10.png';

class ContentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleMenu2 = this.toggleMenu2.bind(this);
  };

  toggleMenu2 = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  
  render() {
    return (
      <div className="content-modal-wrapper">
        <div className="content-modal2">
          <div> { this.state.show && <ContentLinks /> }</div>
        </div>
        <div id="section-icons">
          <p className="dots-2" id="dots" onClick={ this.toggleMenu2 }>
            <img src={ DotsIcon } alt="Dots icon" />
          </p>
          <div className="plus-minus-icons">
            <p className="plus-style">
              <img src={ PlusIcon } alt="Plus icon" />
            </p>
            <p><img src={ LineIcon } alt="line icon" /></p>
            <p className="minus-style">
              <img src={ MinusIcon } alt="Minus icon" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentModal;
