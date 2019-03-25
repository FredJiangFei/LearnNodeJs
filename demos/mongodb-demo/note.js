const couserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20
    // match: /pattern/
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile'],
    lowercase: true
    // uppercase
    // trim
  },
  author: String,
  tags: {
    isAsync: true,
    type: Array,
    validate: {
      validator: function(v, callback) {
        setTimeout(() => {
          const result = v && v.length > 0;
          callback(result);
        }, 4000);
      },
      message: 'Should have at least on tag'
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function() {
      this.isPublished;
    }
    // get
    // set
  }
});

const Course = mongoose.model('Course', couserSchema);

// async function createCourse() {
//   const course = new Course({
//     // name: 'Angular course',
//     author: 'Fred',
//     tags: ['angular', 'frontend'],
//     isPublished: true
//   });
//   const result = await course.save();
//   console.log(result);
// }

// async function getCourses() {
//   // eq
//   // ne
//   // gt
//   // gte
//   // lt
//   // lte
//   // in
//   // nin

//   const result = await Course.find({ author: 'Fred' })
//     // .find({ author: /^Fred/i })
//     // .or()
//     // .and()
//     // .skip()
//     .limit(10)
//     .sort({ name: 1 })
//     // .count()
//     .select({ name: 1, tags: 1 });
//   console.log(result);
// }

// async function updateCourse(id) {
//   const course = await Course.findById(id);
//   course.set({
//     isPublished: false
//   });

//   const result = await course.save();
//   console.log(result);
// }

// async function updateCourseDirect(id) {
//   const result = await Course.update(
//     { _id: id },
//     {
//       $set: {
//         isPublished: false
//       }
//     }
//   );
//   console.log(result);
// }

// async function removeCourse(id) {
//   const result = await Course.deleteOne({ _id: id });
//   console.log(result);
// }

// createCourse();
