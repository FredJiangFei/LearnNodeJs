const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
  tags: { type: String, index: true }
});

authorSchema.methods.speak = function() {
  var greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name";
  console.log(greeting);
};

authorSchema.statics.findByName = function(name, cb) {
  return this.find({ name: new RegExp(name, 'i') }, cb);
};

authorSchema.query.byName = function(name) {
  return this.where({ name: new RegExp(name, 'i') });
};

const Author = mongoose.model('Author', authorSchema);

exports.Author = Author;
