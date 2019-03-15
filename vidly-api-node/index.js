const cors = require('cors');
const express = require('express');
const app = new express();

let customers = ['Fred', 'Dan'];
app.use(express.json());
app.use(cors());

app.get('/api/customers', (req, res) => {
  res.send(customers);
});

app.post('/api/customers', (req, res) => {
  customers.push(req.body.name);
  res.send(customers);
});

app.delete('/api/customers/:name', (req, res) => {
  customers = customers.filter(name => name != req.params.name);
  res.send(customers);
});

app.listen(3900, () => console.log(`Listening 3900.....`));
