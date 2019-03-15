const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = new express();
require('./routes/routes')(app);

const dbStr = config.get('db');
mongoose.connect(dbStr);

const port = config.get('port');
app.listen(port, () => console.log(`Listening ${port}.....`));
