// Track.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Track = ({ match }) => {
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    const fetchDonationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/track/${match.params.id}`);
        setDonation(response.data);
      } catch (error) {
        console.error('Error fetching donation details:', error.message);
      }
    };

    fetchDonationDetails();
  }, [match.params.id]);

  const renderMap = () => {
    // Logic to render Google Maps with start and destination points
    if (donation) {
      const startLocation = 'CBIT Gandipet, Hyderabad'; // Ngo address (fixed)
      const destination = donation.collectionAddress;
      // Use Google Maps API to display the map and calculate time to reach destination
      // You can use the <iframe> tag to embed the map
      return (
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${startLocation}&destination=${destination}`}
          allowFullScreen
        ></iframe>
      );
    }
  };

  const renderDeliveryDetails = () => {
    if (donation) {
      return (
        <div>
          <h2>Delivery Person Details</h2>
          <p>Delivery Man Name: {donation.contactDetails.deliveryManName}</p>
          <p>Phone No: {donation.contactDetails.phoneNo}</p>
          {/* Add more delivery person details if available */}
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Tracking Page</h1>
      {renderMap()}
      {renderDeliveryDetails()}
    </div>
  );
};

export default Track;
