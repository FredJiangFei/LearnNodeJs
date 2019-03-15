const mongoose = require('mongoose');

const Customer = mongoose.model(
  'Customer',
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    }
  })
);

module.exports.Customer = Customer;
