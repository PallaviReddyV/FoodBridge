// History.js
/*{import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ngonavbar from './Ngonavbar';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8000/ngo/history');
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching donation history:', error.message);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <Ngonavbar />
      <div className="container mt-4">
        <h3 className="mb-3 font-weight-bold text-center">Donation History</h3>
        <div className="row">
          {history.map((donation) => (
            <div key={donation._id} className="col-md-4 mb-3">
              <div className="card" style={{ maxWidth: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-center">Donor Name: {donation.donorName}</h5>
                  <p className="card-text"><strong>Food Type:</strong> {donation.foodType}</p>
                  <p className="card-text"><strong>Food Quantity:</strong> {donation.foodQuantity}</p>
                  <p className="card-text"><strong>Food Age:</strong> {donation.foodAge}</p>
                  <p className="card-text"><strong>Collection Address:</strong> {donation.collectionAddress}</p>
                  <p className="card-text"><strong>Special Note:</strong> {donation.specialNote}</p>
                  <p className="card-text"><strong>Date and Time of Donation:</strong> {donation.dateTimeOfDonation}</p>

                  

                  {donation.contactDetails && (
                    <>
                      <p className="card-text"><strong>Phone No:</strong> {donation.contactDetails.phoneNo}</p>
                      <p className="card-text"><strong>Name of Delivery Man:</strong> {donation.contactDetails.deliveryManName}</p>
                      <p className="card-text"><strong>Head Name:</strong> {donation.contactDetails.headName}</p>
                      <p className="card-text"><strong>Ngo Name:</strong> {donation.contactDetails.ngoName}</p>
                    </>
                  )}

                  

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;

}*/


/* // History.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ngonavbar from './Ngonavbar';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8000/ngo/history');
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching donation history:', error.message);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      
      <div className="container mt-4">
        <h3 className="mb-3 font-weight-bold text-center" style={{ color: 'darkgreen' }}>All Your History !!</h3>
        <div className="row">
          {history.map((donation) => (
            <div key={donation._id} className="col-md-4 mb-3">
              <div className="card" style={{ maxWidth: '18rem', backgroundColor: 'lightgreen' }}>
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-center">Donor Name: {donation.donorName}</h5>
                  <p className="card-text"><strong>Food Type:</strong> {donation.foodType}</p>
                  <p className="card-text"><strong>Food Quantity:</strong> {donation.foodQuantity}</p>
                  <p className="card-text"><strong>Food Age:</strong> {donation.foodAge}</p>
                  <p className="card-text"><strong>Collection Address:</strong> {donation.collectionAddress}</p>
                  <p className="card-text"><strong>Special Note:</strong> {donation.specialNote}</p>
                  <p className="card-text"><strong>Date and Time of Donation:</strong> {donation.dateTimeOfDonation}</p>

                  {donation.contactDetails && (
                    <>
                      <p className="card-text"><strong>Phone No:</strong> {donation.contactDetails.phoneNo}</p>
                      <p className="card-text"><strong>Name of Delivery Man:</strong> {donation.contactDetails.deliveryManName}</p>
                      <p className="card-text"><strong>Head Name:</strong> {donation.contactDetails.headName}</p>
                      <p className="card-text"><strong>Ngo Name:</strong> {donation.contactDetails.ngoName}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;


*/


// History.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ngonavbar from './Ngonavbar';
import { Link } from 'react-router-dom';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8000/ngo/history');
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching donation history:', error.message);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <Ngonavbar />
      <div className="container mt-4">
        <h3 className="mb-3 font-weight-bold text-center" style={{ color: 'darkgreen' }}>All Your History !!</h3>
        <div className="row">
          {history.map((donation) => (
            <div key={donation._id} className="col-md-4 mb-3">
              <div className="card" style={{ maxWidth: '18rem', backgroundColor: 'lightgreen' }}>
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-center">Donor Name: {donation.donorName}</h5>
                  <p className="card-text"><strong>Food Type:</strong> {donation.foodType}</p>
                  <p className="card-text"><strong>Food Quantity:</strong> {donation.foodQuantity}</p>
                  <p className="card-text"><strong>Food Age:</strong> {donation.foodAge}</p>
                  <p className="card-text"><strong>Collection Address:</strong> {donation.collectionAddress}</p>
                  <p className="card-text"><strong>Special Note:</strong> {donation.specialNote}</p>
                  <p className="card-text"><strong>Date and Time of Donation:</strong> {donation.dateTimeOfDonation}</p>

                  {donation.contactDetails && (
                    <>
                      <p className="card-text"><strong>Phone No:</strong> {donation.contactDetails.phoneNo}</p>
                      <p className="card-text"><strong>Name of Delivery Man:</strong> {donation.contactDetails.deliveryManName}</p>
                      <p className="card-text"><strong>Head Name:</strong> {donation.contactDetails.headName}</p>
                      <p className="card-text"><strong>Ngo Name:</strong> {donation.contactDetails.ngoName}</p>
                    </>
                  )}

                  <Link to={`/track/${donation._id}`} className="btn btn-primary mt-3">
                    Track Food Donation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;

