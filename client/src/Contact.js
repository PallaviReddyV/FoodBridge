
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for navigation hook
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Bodynavbar from "./Bodynavbar";
import Footer from "./Footer";

const Contact = () => {
  const navigate = useNavigate(); // Correct hook for navigation

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/contact/submitContactForm', formData);

      console.log('Contact form submitted:', response.data);

      if (response.status === 200) {
        // Handle successful form submission
        console.log('Form submitted successfully');
        navigate('/thankyou'); // Navigate to Thankyou.js using useNavigate
      } else {
        console.log('Form submission failed. Please try again.');
        // Handle submission failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Submission error:', error.message);
      // Handle specific error cases here
    }
  };

  return (
    <div>
      <Bodynavbar />
      <section className="mb-4" style={{ backgroundColor: '#c1e2c1' }}>
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
              <h2 className="h1-responsive playfair-display-medium-italic text-center my-4" style={{ color: '#333' }}>Contact us</h2>
              <p className="text-center w-responsive mx-auto mb-5">
                <h4 className="poppins-medium-italic">Do you have any questions? <br/>Please do not hesitate to contact us directly.<br/>
                Our team will come back to you within a matter of hours to help you.
                </h4>
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" 
                      value={formData.name} onChange={handleChange} />
                    <label htmlFor="name" className="">Your name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control"
                       value={formData.email} onChange={handleChange} />
                    <label htmlFor="email" className="">Your email</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control" 
                       value={formData.subject} onChange={handleChange} />
                    <label htmlFor="subject" className="">Subject</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" 
                       value={formData.message} onChange={handleChange}></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Send</button>
            </form>

            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="material-symbols-outlined">location_on</i>
                <p> Address: Warangal Urban, Hanamkonda</p>
              </li>

              <li>
                <i className="material-symbols-outlined">call</i>
                <p>+01 234 567 89</p>
              </li>

              <li>
                <i className="material-symbols-outlined">mail</i>
                <p>Email: FoodForAll@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </section>
      
    </div>

  );
};

export default Contact;
