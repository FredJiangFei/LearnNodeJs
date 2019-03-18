// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// const http = require('http');
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto
  .createHmac('sha256', secret)
  .update('I love cupcakes')
  .digest('hex');
console.log(hash);
// Path
// console.log(path.parse(__filename));

// OS
// console.log(os.totalmem());
// console.log(os.freemem());

//File system
// fs.readdir('./', (err, files) => {
//   console.log(files);
// });

//Event
// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('messagelog', args => {
//   console.log(`Message log ${args.name}`);
// });
// logger.log('Fred');

// //Http
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Hello world');
//   }

//   if (req.url === '/api/courses') {
//     res.write(JSON.stringify([1, 2, 3]));
//   }

//   res.end();
// });
// server.listen(3000);

// server.on('connection', socket => {
//   console.log('New connection...');
// });
// server.listen(3000);
// console.log('Listening on port 3000...');
