import React from 'react';
import { Link } from 'react-router-dom';

import Search from "../images/search.png";
import Eclispse from '../images/Ellipse 16.png';

 const Header = () => {
   return (
     <div>
       <header className="headerPage">
         <div>
           <img src={ Eclispse } alt="dot" className="ellipse-note" />
           <div className="sixty-note">
             <Link to="/aboutpage">3Sixty</Link>
           </div>
         </div>
         <div className="header-logo">
           <img src={ Search } alt="Search" />
           
           <input type="search" placeholder="Search notes" />
         </div>
       </header>
     </div>
   );
}

export default Header; 