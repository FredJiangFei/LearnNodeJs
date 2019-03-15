const express = require('express');
const cors = require('cors');
const customers = require('./customers');
const auth = require('./auth');
const users = require('./users');

module.exports = function(app) {
  app.use(cors());
  app.use(express.json());
  app.use('/api/customers', customers);
  app.use('/api/auths', auth);
  app.use('/api/users', users);
};
