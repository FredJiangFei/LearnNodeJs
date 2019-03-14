const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const courses = [{ id: 1, name: 'course1' }, { id: 2, name: 'course2' }];

// nodemon
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === Number(req.params.id));
  if (!course) res.status(404).send('Not found course');

  res.send(course);
});

// app.get('/api/posts/:year/:month', (req, res) => {
//   res.send(req.params);
// });

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.query);
});

app.post('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {});

// PORT
const port = process.env.PORT || 3000;
// set PORT=5000

app.listen(port, () => console.log(`Listening ${port}.....`));
