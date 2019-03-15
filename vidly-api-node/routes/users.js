const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const _ = require('lodash');

router.post('/', async (req, res) => {
  userData = _.pick(req.body, ['name', 'email', 'password', 'isAdmin']);
  let user = new User(userData);
  await user.save();
  res.send(user);
});

module.exports = router;
