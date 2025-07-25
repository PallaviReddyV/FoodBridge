/*{import React from "react";
const Footer = () => {
  return (
    <div className="mainfooter">
      <div className="contact-section">
        <h5>Contact Us</h5>
        <div>
          <h6>Email: FoodForAll@gmail.com</h6>
          <h6>Phone: +91234567876</h6>
          <h6>Address: Warangal-Urban, Hanamkonda</h6>

        </div>
      </div>
      <div className="follow-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="insta" alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-logo.png" alt="LinkedIn" />
          </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                 <img src="twitter-logo.png" alt="Twitter"/>
                 </a>

                 
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="./images/toutube.png" alt="Twitter" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
}*/
/*{
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Footer = () => {
  // Custom CSS for reducing the size of text and logos
  const footerStyle = {
    fontSize: '0.8rem', // Smaller text
    padding: '10px 0', // Reduce padding to decrease height
  };

  const logoStyle = {
    width: '30px', // Smaller logos
    height: '30px',
    marginRight: '5px', // Space between logos
  };

  return (
    <div className="mainfooter text-center" style={footerStyle}>
      <div className="container">
        <div className="row">
        
          <div className="col-md-6 contact-section">
            <h5>Contact Us</h5>
            <p>Email: FoodForAll@gmail.com</p>
            <p>Phone: +91234567876</p>
            <p>Address: Warangal-Urban, Hanamkonda</p>
          </div>
          
          <div className="col-md-6 follow-section">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/path-to-your-instagram-logo.png" alt="Instagram" style={logoStyle} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src="/path-to-your-linkedin-logo.png" alt="LinkedIn" style={logoStyle} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="/path-to-your-twitter-logo.png" alt="Twitter" style={logoStyle} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src="/path-to-your-youtube-logo.png" alt="YouTube" style={logoStyle} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
}*/


/*{
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is correctly imported

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <p>Email: FoodForAll@gmail.com</p>
            <p>Phone: +91234567876</p>
            <p>Address: Warangal-Urban, Hanamkonda</p>
          </div>

          <div className="col-md-6 mb-4 mb-md-0 text-md-end">
            <section className="mb-4">
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i className="fab fa-google"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!" role="button"><i className="fab fa-github"></i></a>
            </section>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
}*/

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is correctly imported

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <div className="row">
          {/* Updated Contact Section with Icons */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <p><i className="fas fa-envelope me-3"></i>FoodForLife@gmail.com</p>
            <p><i className="fas fa-phone me-3"></i>+91234567876</p>
            <p><i className="fas fa-home me-3"></i>Warangal-Urban, Hanamkonda</p>
          </div>

          {/* Social Media Icons Section */}
          <div className="col-md-6 mb-4 mb-md-0 text-md-end">
            <section className="mb-4">
              {/* Social Media Icons */}
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i className="fab fa-google"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!" role="button"><i className="fab fa-github"></i></a>
            </section>
          </div>
        </div>
      </div>

      {/* Footer Closing Message */}
      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        Thanks for your support
      </div>
    </footer>
  );
};

export default Footer;

