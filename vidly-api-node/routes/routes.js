const express = require('express');
const cors = require('cors');
const customers = require('./customers');

module.exports = function(app) {
  app.use(cors());
  app.use(express.json());
  app.use('/api/customers', customers);
};
