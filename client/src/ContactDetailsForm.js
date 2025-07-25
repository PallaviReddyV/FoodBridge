
/*{import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ContactDetailsForm = ({ donationId, onContactDetailsSubmit }) => {
  const [contactDetails, setContactDetails] = useState({
    phoneNo: '',
    deliveryManName: '',
    headName: '',
    ngoName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8000/ngo/addContactDetails/${donationId}`, { contactDetails });
      onContactDetailsSubmit(); // Notify the parent component about the submission
    } catch (error) {
      console.error('Error submitting contact details:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div className="mb-3">
        <label htmlFor="phoneNo" className="form-label">Phone No</label>
        <input type="text" className="form-control" id="phoneNo" name="phoneNo" value={contactDetails.phoneNo} onChange={handleInputChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="deliveryManName" className="form-label">Name of Delivery Man</label>
        <input type="text" className="form-control" id="deliveryManName" name="deliveryManName" value={contactDetails.deliveryManName} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="headName" className="form-label">Head Name</label>
        <input type="text" className="form-control" id="headName" name="headName" value={contactDetails.headName} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="ngoName" className="form-label">Ngo Name</label>
        <input type="text" className="form-control" id="ngoName" name="ngoName" value={contactDetails.ngoName} onChange={handleInputChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit Contact Details</button>
    </form>
  );
};

export default ContactDetailsForm;
}*/


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ContactDetailsForm = ({ donationId, onContactDetailsSubmit }) => {
  const [contactDetails, setContactDetails] = useState({
    phoneNo: '',
    deliveryManName: '',
    headName: '',
    ngoName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone number validation
    if (contactDetails.phoneNo.length !== 10) {
      alert('Phone number must be 10 digits.');
      return;
    }

    try {
      await axios.post(`http://localhost:8000/ngo/addContactDetails/${donationId}`, { contactDetails });
      onContactDetailsSubmit(); // Notify the parent component about the submission
    } catch (error) {
      console.error('Error submitting contact details:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (existing code) */}
      <div className="mb-3">
        <label htmlFor="phoneNo" className="form-label">Phone No</label>
        <input type="text" className="form-control" id="phoneNo" name="phoneNo" value={contactDetails.phoneNo} onChange={handleInputChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="deliveryManName" className="form-label">Name of Delivery Man</label>
        <input type="text" className="form-control" id="deliveryManName" name="deliveryManName" value={contactDetails.deliveryManName} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="headName" className="form-label">Head Name</label>
        <input type="text" className="form-control" id="headName" name="headName" value={contactDetails.headName} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="ngoName" className="form-label">Ngo Name</label>
        <input type="text" className="form-control" id="ngoName" name="ngoName" value={contactDetails.ngoName} onChange={handleInputChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit Contact Details</button>
    </form>
  );
};

export default ContactDetailsForm;

