import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Headers';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';



const Homepage = () => {
  return (
    <div className="container">
      <div>
        <Header />
        <FirstSection />
        <SecondSection />
        <div className="btnPage">
          <Link to="/dash/note" className="mylinks">
            <button id="get-started-btn">Get Started</button>
          </Link>
        </div>
        <footer>
          <p>All Right Reserved. 2020 @Timothy Attah</p>
        </footer>
      </div>
    </div>
  );
}
 
export default Homepage;