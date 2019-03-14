const Joi = require('joi');
const express = require('express');
const router = express.Router();

const courses = [{ id: 1, name: 'course1' }, { id: 2, name: 'course2' }];

router.get('/', (req, res) => {
  res.send(courses);
});

router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === Number(req.params.id));
  if (!course) res.status(404).send('Not found course');

  res.send(course);
});

// app.get('/api/posts/:year/:month', (req, res) => {
//   res.send(req.params);
// });

router.get('/:year/:month', (req, res) => {
  res.send(req.query);
});

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === Number(req.params.id));
  if (!course) {
    res.status(404).send('Not found course');
    return;
  }

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

  course.name = req.body.name;
  res.send(course);
});

module.exports = router;
