const { Author } = require('../models/author');

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website
  });
  const result = await author.save();
  console.log(result);
}

async function speak(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website
  });
  // author.speak();

  console.log(author.fullName);
}

async function findByName(name) {
  // Author.findByName(name, function(err, authors) {
  //   console.log(authors);
  // });

  Author.find()
    .byName(name)
    .exec(function(err, authors) {
      console.log(authors);
    });
}

exports.createAuthor = createAuthor;
exports.speak = speak;
exports.findByName = findByName;
