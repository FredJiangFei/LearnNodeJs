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
  author.speak();
}

exports.createAuthor = createAuthor;
exports.speak = speak;
