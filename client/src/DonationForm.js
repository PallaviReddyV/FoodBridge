
/*{
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './images/contact3.webp';
import axios from 'axios';

const FoodDonationForm = () => {
  const [donorName, setDonorName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [foodAge, setFoodAge] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toISOString(); // Convert to ISO string format
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateTimeOfDonation = getCurrentDateTime();

    try {
      // Make an axios post request to send the form data to the server
      const response = await axios.post('http://localhost:8000/donation/submitDonationForm', {
        donorName,
        foodType,
        foodQuantity,
        foodAge,
        collectionAddress,
        specialNote,
        dateTimeOfDonation,
      });

      console.log('Server response:', response.data);

      // Add any additional logic here based on the server response
    } catch (error) {
      console.error('Error submitting donation form:', error.message);
      // Handle specific error cases here
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-none d-md-block">
        
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`, // Use the imported image
              backgroundSize: 'cover',
              height: '100vh',
            }}
          ></div>
        </div>
        <div className="col-md-6 p-5" style={{ backgroundColor: '#c1e2c1' }}>
          <h2 className="text-center mb-4">Food Donation Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="donorName" className="form-label">Donor Name</label>
              <input type="text" className="form-control" id="donorName" value={donorName} onChange={(e) => setDonorName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="foodType" className="form-label">Food Type</label>
              <input type="text" className="form-control" id="foodType" value={foodType} onChange={(e) => setFoodType(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="foodQuantity" className="form-label">Food Quantity</label>
              <input type="number" className="form-control" id="foodQuantity" value={foodQuantity} onChange={(e) => setFoodQuantity(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="foodAge" className="form-label">Food Age</label>
              <input type="text" className="form-control" id="foodAge" value={foodAge} onChange={(e) => setFoodAge(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="collectionAddress" className="form-label">Collection Address</label>
              <textarea className="form-control" id="collectionAddress" rows="3" value={collectionAddress} onChange={(e) => setCollectionAddress(e.target.value)} required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="specialNote" className="form-label">Special Note</label>
              <textarea className="form-control" id="specialNote" rows="3" value={specialNote} onChange={(e) => setSpecialNote(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="dateTimeOfDonation" className="form-label">Date and Time of Donation</label>
              <input
                type="text"
                className="form-control"
                id="dateTimeOfDonation"
                value={getCurrentDateTime()}
                readOnly
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodDonationForm;
}*/

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './images/contact3.webp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FoodDonationForm = () => {
  const [donorName, setDonorName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [foodAge, setFoodAge] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toISOString(); // Convert to ISO string format
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateTimeOfDonation = getCurrentDateTime();

    try {
      // Make an axios post request to send the form data to the server
      const response = await axios.post('http://localhost:8000/donation/submitDonationForm', {
        donorName,
        foodType,
        foodQuantity,
        foodAge,
        collectionAddress,
        specialNote,
        dateTimeOfDonation,
      });

      console.log('Server response:', response.data);

      // Redirect to Thankyou page after successful form submission
      navigate('/Thankyou');

    } catch (error) {
      console.error('Error submitting donation form:', error.message);
      // Handle specific error cases here
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-none d-md-block">
          
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`, // Use the imported image
              backgroundSize: 'cover',
              height: '100vh',
            }}
          ></div>
        </div>
        <div className="col-md-6 p-5" style={{ backgroundColor: '#c1e2c1' }}>
          <h2 className="text-center mb-4">Food Donation Form</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="donorName" className="form-label">Donor Name</label>
              <input type="text" className="form-control" id="donorName" value={donorName} onChange={(e) => setDonorName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="foodType" className="form-label">Food Type</label>
              <input type="text" className="form-control" id="foodType" value={foodType} onChange={(e) => setFoodType(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="foodQuantity" className="form-label">Food Quantity</label>
              <input type="number" className="form-control" id="foodQuantity" value={foodQuantity} onChange={(e) => setFoodQuantity(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="foodAge" className="form-label">Food Age</label>
              <input type="text" className="form-control" id="foodAge" value={foodAge} onChange={(e) => setFoodAge(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="collectionAddress" className="form-label">Collection Address</label>
              <textarea className="form-control" id="collectionAddress" rows="3" value={collectionAddress} onChange={(e) => setCollectionAddress(e.target.value)} required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="specialNote" className="form-label">Special Note</label>
              <textarea className="form-control" id="specialNote" rows="3" value={specialNote} onChange={(e) => setSpecialNote(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="dateTimeOfDonation" className="form-label">Date and Time of Donation</label>
              <input
                type="text"
                className="form-control"
                id="dateTimeOfDonation"
                value={getCurrentDateTime()}
                readOnly
              />
            </div>

           
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodDonationForm;


