/*{import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ngonavbar = () => {
  return (
    <nav className="navbar bg-dark justify-content-center" 
       style={{ backgroundColor: 'grey',height:'70px'}}>
      <li className="nav-link ">
        <NavLink to="/dashboard"  className="nav-link" 
           style={({ isActive }) => ({ color: isActive ? 'green' : 'white'})}>
          history
        </NavLink>
        </li>
      <li className="nav-link ">
         <NavLink to="/dashboard" className="nav-link"
             style={({ isActive }) => ({ color: isActive ? 'green' : 'white',width:'20px' })}>
            logout
         </NavLink>
      </li>
   <NavDropdown title="PreparationKit" id="basic-nav-dropdown" className="nav-link" 
     style={{color:'white'}}>
     <NavDropdown.Item href='./dsa'>DSA</NavDropdown.Item>
     <NavDropdown.Item href='./Dbms'>DBMS</NavDropdown.Item>
     <NavDropdown.Item href="./Os">OS</NavDropdown.Item>
   </NavDropdown>
      <li className="nav-link ">
        <NavLink to="/dashboard" className="nav-link" 
           style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
              logout
        </NavLink>
      </li>

  </nav>
  )
}
export default Ngonavbar;
}*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'; // Import the CSS file

const Ngonavbar = () => {
  return (
    <nav className="navbar bg-dark justify-content-center" 
    style={{ backgroundColor: 'grey', height: '70px' }}>
      <div className="container2">
        <div className="row1">
          <div >
            <div className="nav-link welcome">
           Food For Life
            </div>
          </div>
          <div className="coll">
            <NavLink to="/dashboard" className="nav-link"
               style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
             GALLERY
            </NavLink>
          </div>
          
          <div className="coll">
           <NavLink to="/feedback" className="nav-link" 
              style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
                FEEDBACK
            </NavLink>
          </div>
          <div className="coll">
            <NavDropdown title="PERSON-1" id="basic-nav-dropdown" className="nav-link" 
            style={{ color: 'white' }}>
              <NavDropdown.Item href='./account'>ACCOUNT</NavDropdown.Item>
              <NavDropdown.Item href='./history'>HISTORY</NavDropdown.Item>
              <NavDropdown.Item href="./">LAGOUT</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Ngonavbar;


