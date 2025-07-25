/*{import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'; // Import the CSS file

const Resnavbar = () => {
  return (
    <nav className="navbar bg-dark justify-content-center" 
    style={{ backgroundColor: 'grey', height: '70px' }}>
      <div className="container1">
        <div className="row">
          
            <div className="nav-link welcome">
            <h5>Res Name</h5>
            </div>
          
          <div className="col2">
            <NavLink to="/About" className="nav-link"
               style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
              ABOUT US
            </NavLink>
          </div>
          <div className="col2">
            <NavLink to="/DonationForm" className="nav-link" 
            style={({ isActive }) => ({ color: isActive ? 'green' : 'white', width: '20px' })}>
            DONATE
            </NavLink>
          </div>
          <div className="col2">
            <NavLink to="/Contact" className="nav-link" 
                style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
                 CONATCT US
            </NavLink>
          </div>
          <div className="col1">
            <NavDropdown title="PERSON-NAME" id="basic-nav-dropdown" className="nav-link" 
            style={{ color: 'white' }}>
              <NavDropdown.Item href='./dsa'>ACCOUNT</NavDropdown.Item>
              <NavDropdown.Item href='./history'>DONATION HISTORY</NavDropdown.Item>
              <NavDropdown.Item href="./">LOGOUT</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Resnavbar;
}*/

/*{import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'; // Import the CSS file

const Resnavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark justify-content-center" style={{ backgroundColor: 'grey' }}>
      <div className="container">
        <div className="row">
          <div className="navbar-brand">
            <h5>Res Name</h5>
          </div>
          <div className="col-md">
            <NavLink to="/About" className="nav-link">
              ABOUT US
            </NavLink>
          </div>
          <div className="col-md">
            <NavLink to="/DonationForm" className="nav-link">
              DONATE
            </NavLink>
          </div>
          <div className="col-md">
            <NavLink to="/Contact" className="nav-link">
              CONTACT US
            </NavLink>
          </div>
          <div className="col-md">
            <NavDropdown title="PERSON-NAME" id="basic-nav-dropdown" className="nav-link">
              <NavDropdown.Item href='./dsa'>ACCOUNT</NavDropdown.Item>
              <NavDropdown.Item href='./history'>DONATION HISTORY</NavDropdown.Item>
              <NavDropdown.Item href="./">LOGOUT</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Resnavbar;
}*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'; // Import the CSS file

const Resnavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark justify-content-center" style={{ backgroundColor: 'grey' }}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <NavLink to="/About" className="nav-link">
              ABOUT US
            </NavLink>
          </div>
          <div className="col-md">
            <NavLink to="/DonationForm" className="nav-link">
              DONATE
            </NavLink>
          </div>
          <div className="col-md">
            <NavLink to="/Contact" className="nav-link">
              CONTACT US
            </NavLink>
          </div>
          <div className="col-md">
            <NavDropdown title="PERSON-NAME" id="basic-nav-dropdown" className="nav-link">
              <NavDropdown.Item href='./account'>ACCOUNT</NavDropdown.Item>
              <NavDropdown.Item href='./history'>DONATION ACCEPTED</NavDropdown.Item>
              <NavDropdown.Item href="./">LOGOUT</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Resnavbar;




