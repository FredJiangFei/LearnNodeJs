const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('Connect to mongo....'))
  .catch(err => console.log('Can not connect', err));
