/*// Routes/Track.js
const express = require('express');
const router = express.Router();

// GET request to track a specific donation
router.get('/:id', (req, res) => {
  // Add logic to fetch donation details and calculate time to reach destination
  res.send('Tracking Donation...');
});

module.exports = router;

*/


// Routes/Track.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET request to track a specific donation
router.get('/:id', async (req, res) => {
  try {
    // Fetch donation details from your database using the provided donation ID
    const donation = await fetchDonationDetails(req.params.id);

    // Get the start location (CBIT Gandipet, Hyderabad) and destination from donation details
    const startLocation = 'CBIT Gandipet, Hyderabad';
    const destination = donation.collectionAddress;

    // Get route details using Google Maps Directions API
    const route = await fetchRoute(startLocation, destination);

    // Calculate time to reach destination
    const timeToReachDestination = route.data.routes[0].legs[0].duration.text;

    // Construct delivery person details
    const deliveryPersonDetails = {
      deliveryManName: donation.contactDetails.deliveryManName,
      phoneNo: donation.contactDetails.phoneNo,
      // Add more delivery person details if available
    };

    res.json({ route: route.data, timeToReachDestination, deliveryPersonDetails });
  } catch (error) {
    console.error('Error tracking donation:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to fetch donation details from the database
const fetchDonationDetails = async (id) => {
  try {
    // Implement logic to fetch donation details from your database using the provided donation ID
    // For example: const donation = await Donation.findById(id);
    // Replace this with your actual implementation
    return {}; // Dummy return for demonstration
  } catch (error) {
    throw new Error('Error fetching donation details');
  }
};

// Function to fetch route details from Google Maps Directions API
const fetchRoute = async (startLocation, destination) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
      params: {
        origin: startLocation,
        destination: destination,
        key: 'AIzaSyDXp6RwNeX6gowfb-_vzdeSvI2uTLUe5Yc', // Replace with your actual Google Maps API key
      },
    });
    return response;
  } catch (error) {
    throw new Error('Error fetching route details');
  }
};

module.exports = router;

