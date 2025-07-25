import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'; // Import the CSS file



const Bodynavbar = () => {
  return (
    <nav className="navbar bg-dark justify-content-center" 
    style={{ backgroundColor: 'grey', height: '70px' }}>
      <div className="containerbody">
        <div className="row">
          <div className="bodyhead">
            <div className="nav-link welcome">
             <h4>FoodForLife!</h4>
            </div>
          </div>
       <div className="col" >
            <NavLink to="/About" className="nav-link" 
            style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
               ABOUT US
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/Contact" className="nav-link" 
            style={({ isActive }) => ({ color: isActive ? 'green' : 'white'})}>
             CONTACT US
            </NavLink>
          </div>
        </div>
     </div>
    </nav>
   )
}
export default Bodynavbar;



