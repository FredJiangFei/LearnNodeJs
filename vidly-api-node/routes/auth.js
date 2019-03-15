const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.post('/', async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  const token = user.generateAuthToken();
  res.send(token);
});

module.exports = router;
