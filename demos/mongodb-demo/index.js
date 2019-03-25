const { createAuthor, speak } = require('./services/author');
require('./connect');

speak('Mosh', 'My bio', 'My Website');
