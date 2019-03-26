const { createAuthor, speak, findByName } = require('./services/author');
require('./connect');

speak('Mosh', 'My bio', 'My Website');

// findByName('Mo');
