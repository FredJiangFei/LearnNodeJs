const express = require('express');
const morgan = require('morgan');
const config = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const courses = require('./routes/courses');

const app = express();

app.set('view engine', 'ejs'); //pug handlebars ejs
app.set('views', './change_views');

app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('logging....');
  next();
});

startupDebugger(`NODE_ENV: ${process.env.NODE_ENV}`);
startupDebugger(`app: ${app.get('env')}`);
app.use(morgan('tiny'));

app.use('/api/courses', courses);

//Configuartion
dbDebugger(`Config name: ${config.get('name')}`);
dbDebugger(`Mail host: ${config.get('mail.host')}`);

// nodemon
app.get('/', (req, res) => {
  res.render('test', { title: 'hello', message: 'Hello World' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening ${port}.....`));
