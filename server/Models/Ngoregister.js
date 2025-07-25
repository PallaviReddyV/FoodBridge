const mongoose = require('mongoose');

const NgoregisterSchema = new mongoose.Schema({
  yourName: { type: String, required: true },
  ngoEmail: { type: String, required: true },
  ngoName: { type: String, required: true },
  ngoAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const Ngoregister = mongoose.model('Ngoregister', NgoregisterSchema);

module.exports = Ngoregister;

/*{
const mongoose = require('mongoose');

const ngoregisterSchema = new mongoose.Schema({
  yourName: String,
  ngoEmail: String,
  ngoName: String,
  ngoAddress: String,
  phoneNumber: String,
  password: String,
  confirmPassword: 
  { type: String, 
    required: true
  },
});

const Ngoregister = mongoose.model('Ngoregister', ngoregisterSchema);

module.exports = Ngoregister;
}*/
