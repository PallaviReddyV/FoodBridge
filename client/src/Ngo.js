

/*{import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactDetailsForm from './ContactDetailsForm';
import Ngonavbar from './Ngonavbar';

const Ngo = () => {
  const [donations, setDonations] = useState([]);
  const [donationStatus, setDonationStatus] = useState('');

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:8000/ngo/donations');
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error.message);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, [donationStatus]);

  const handleStatusChange = async (donationId) => {
    try {
      await axios.post(`http://localhost:8000/ngo/updateStatus/${donationId}`, { donationStatus });
      fetchDonations();
    } catch (error) {
      console.error('Error updating donation status:', error.message);
    }
  };

  const handleContactDetailsSubmit = () => {
    // Fetch updated donations after submitting contact details
    fetchDonations();
  };

  return (
    <div>
      <Ngonavbar />
    <div className="container mt-4">
      <h3 className="mb-3 font-weight-bold text-center">Donation Details</h3>
      <div className="row justify-content-center">
        {donations.map((donation) => (
          <div key={donation._id} className="col-md-6 mb-3">
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

                <div className="mb-3">
                  <label htmlFor={`donationStatus-${donation._id}`} className="form-label">Donation Status</label>
                  <select
                    id={`donationStatus-${donation._id}`}
                    className="form-control"
                    value={donationStatus}
                    onChange={(e) => setDonationStatus(e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="accept">Accept</option>
                  </select>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleStatusChange(donation._id)}
                  >
                    Update Status
                  </button>
                </div>

                <ContactDetailsForm donationId={donation._id} onContactDetailsSubmit={handleContactDetailsSubmit} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Ngo;
}*/


/*{import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactDetailsForm from './ContactDetailsForm';
import Ngonavbar from './Ngonavbar';

const Ngo = () => {
  const [donations, setDonations] = useState([]);
  const [donationStatus, setDonationStatus] = useState('');

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:8000/ngo/donations');
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error.message);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, [donationStatus]);

  const handleStatusChange = async (donationId) => {
    try {
      await axios.post(`http://localhost:8000/ngo/updateStatus/${donationId}`, { donationStatus });
      fetchDonations();
    } catch (error) {
      console.error('Error updating donation status:', error.message);
    }
  };

  const handleContactDetailsSubmit = () => {
    // Fetch updated donations after submitting contact details
    fetchDonations();
  };

  return (
    <div>
      <Ngonavbar />
      <div className="container mt-4">
        <h3 className="mb-3 font-weight-bold text-center">Donation Details</h3>
        <div className="row">
          {donations.map((donation) => (
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

                  <div className="mb-3">
                    <label htmlFor={`donationStatus-${donation._id}`} className="form-label">Donation Status</label>
                    <select
                      id={`donationStatus-${donation._id}`}
                      className="form-control"
                      value={donationStatus}
                      onChange={(e) => setDonationStatus(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="accept">Accept</option>
                    </select>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => handleStatusChange(donation._id)}
                    >
                      Update Status
                    </button>
                  </div>

                  <ContactDetailsForm donationId={donation._id} onContactDetailsSubmit={handleContactDetailsSubmit} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ngo;
}*/

/*{
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactDetailsForm from './ContactDetailsForm';
import Ngonavbar from './Ngonavbar';

const Ngo = () => {
  const [donations, setDonations] = useState([]);

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:8000/ngo/donations');
      setDonations(response.data.map(donation => ({ ...donation, donationStatus: '' })));
    } catch (error) {
      console.error('Error fetching donations:', error.message);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleStatusChange = async (donationId, donationStatus) => {
    try {
      await axios.post(`http://localhost:8000/ngo/updateStatus/${donationId}`, { donationStatus });
      fetchDonations();
    } catch (error) {
      console.error('Error updating donation status:', error.message);
    }
  };

  const handleContactDetailsSubmit = () => {
    // Fetch updated donations after submitting contact details
    fetchDonations();
  };

  return (
    <div>
      <Ngonavbar />
      <div className="container mt-4">
        <h3 className="mb-3 font-weight-bold text-center">Donation Details</h3>
        <div className="row">
          {donations.map((donation) => (
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

                  <div className="mb-3">
                    <label htmlFor={`donationStatus-${donation._id}`} className="form-label">Donation Status</label>
                    <select
                      id={`donationStatus-${donation._id}`}
                      className="form-control"
                      value={donation.donationStatus}
                      onChange={(e) => {
                        const newDonations = donations.map(d =>
                          d._id === donation._id ? { ...d, donationStatus: e.target.value } : d
                        );
                        setDonations(newDonations);
                      }}
                    >
                      <option value="pending">Pending</option>
                      <option value="accept">Accept</option>
                    </select>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => handleStatusChange(donation._id, donation.donationStatus)}
                    >
                      Update Status
                    </button>
                  </div>

                  <ContactDetailsForm donationId={donation._id} onContactDetailsSubmit={handleContactDetailsSubmit} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ngo;
}*/


// Ngo.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactDetailsForm from './ContactDetailsForm';
import Ngonavbar from './Ngonavbar';

const Ngo = () => {
  const [donations, setDonations] = useState([]);

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:8000/ngo/donations');
      setDonations(response.data.map(donation => ({ ...donation, donationStatus: '' })));
    } catch (error) {
      console.error('Error fetching donations:', error.message);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleStatusChange = async (donationId, donationStatus) => {
    try {
      await axios.post(`http://localhost:8000/ngo/updateStatus/${donationId}`, { donationStatus });
      fetchDonations();
    } catch (error) {
      console.error('Error updating donation status:', error.message);
    }
  };

  const handleContactDetailsSubmit = () => {
    // Fetch updated donations after submitting contact details
    fetchDonations();
  };

  return (
    <div>
      <Ngonavbar />
      <div className="container mt-4">
        <h3 className="mb-3 font-weight-bold text-center">Donation Details</h3>
        <div className="row">
          {donations.map((donation) => (
            <div key={donation._id} className="col-md-4 mb-3">
              <div className={`card ${donation.donationStatus === 'accept' ? 'border-success' : ''}`} style={{ maxWidth: '18rem',backgroundColor: '#CF9FFF' }}>
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
                  <div className="mb-3">
                    <label htmlFor={`donationStatus-${donation._id}`} className="form-label">Donation Status</label>
                    <select
                      id={`donationStatus-${donation._id}`}
                      className="form-control"
                      value={donation.donationStatus}
                      onChange={(e) => {
                        const newDonations = donations.map(d =>
                          d._id === donation._id ? { ...d, donationStatus: e.target.value } : d
                        );
                        setDonations(newDonations);
                      }}
                    >
                      <option value="pending">Pending</option>
                      <option value="accept">Accept</option>
                    </select>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => handleStatusChange(donation._id, donation.donationStatus)}
                    >
                      Update Status
                    </button>
                  </div>
                  <ContactDetailsForm donationId={donation._id} onContactDetailsSubmit={handleContactDetailsSubmit} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ngo;
