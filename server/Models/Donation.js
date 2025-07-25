
// Donation.js in Models folder
/*{}
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  foodQuantity: {
    type: Number,
    required: true,
  },
  foodAge: {
    type: String,
  },
  collectionAddress: {
    type: String,
    required: true,
  },
  specialNote: {
    type: String,
  },
  dateTimeOfDonation: {
    type: Date,
    default: Date.now,
  },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
}*/

const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  foodQuantity: {
    type: Number,
    required: true,
  },
  foodAge: {
    type: String,
  },
  collectionAddress: {
    type: String,
    required: true,
  },
  specialNote: {
    type: String,
  },
  dateTimeOfDonation: {
    type: Date,
    default: Date.now,
  },
  contactDetails: {
    
    phoneNo: {
      type: String,
      

    },
    deliveryManName: String,
    headName: String,
    ngoName: String,
  },
  donationStatus: {
    type: String,
    enum: ['pending', 'accept'],
    default: 'pending',
  },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;


