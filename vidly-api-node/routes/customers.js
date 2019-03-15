const { Customer } = require('../models/customer');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});

router.post('/', async (req, res) => {
  let customer = new Customer({
    name: req.body.name
  });
  customer = await customer.save();
  res.send(customer);
});

router.delete(`/:id`, async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);
  res.send(customer);
});

module.exports = router;
