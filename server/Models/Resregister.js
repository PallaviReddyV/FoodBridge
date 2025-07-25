const mongoose = require('mongoose');

const ResregisterSchema = new mongoose.Schema({
  yourName: { type: String, required: true },
  Email: { type: String, required: true },
  Name: { type: String, required: true },
  Address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const Resregister = mongoose.model('Resregister', ResregisterSchema);

module.exports = Resregister;
