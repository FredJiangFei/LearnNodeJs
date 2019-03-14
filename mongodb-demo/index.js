const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('Connect to mongo....'))
  .catch(err => console.log('Can not connect', err));

const couserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', couserSchema);

async function createCourse() {
  const course = new Course({
    // name: 'Angular course',
    author: 'Fred',
    tags: ['angular', 'frontend'],
    isPublished: true
  });
  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  // eq
  // ne
  // gt
  // gte
  // lt
  // lte
  // in
  // nin

  const result = await Course.find({ author: 'Fred' })
    // .find({ author: /^Fred/i })
    // .or()
    // .and()
    // .skip()
    .limit(10)
    .sort({ name: 1 })
    // .count()
    .select({ name: 1, tags: 1 });
  console.log(result);
}

async function updateCourse(id) {
  const course = await Course.findById(id);
  course.set({
    isPublished: false
  });

  const result = await course.save();
  console.log(result);
}

async function updateCourseDirect(id) {
  const result = await Course.update(
    { _id: id },
    {
      $set: {
        isPublished: false
      }
    }
  );
  console.log(result);
}

async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  console.log(result);
}

createCourse('5c8a121806da8b8f9c76a0ae');
