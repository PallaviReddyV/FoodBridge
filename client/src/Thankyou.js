
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from './images/contact2.jpg';

const Thankyou = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div className="container-fluid" style={backgroundImageStyle}>
      <div className="row h-100 align-items-center">
        {/* Centered "Thank You" box */}
        <div className="col-md-6 offset-md-3 text-center" style={{ backgroundColor: 'rgba(193, 226, 193, 0.8)', padding: '20px', color: '#333' }}>
          <h2>Successfully Submitted! Thank You.</h2>
          <p>
            <Link to="/Restaurant" className="btn btn-primary">
              Return to Home Page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;


