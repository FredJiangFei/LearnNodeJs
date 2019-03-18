const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.write('Hello world');
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
  }

  res.end();
});

server.on('connection', socket => {
  // console.dir(socket, { depth: 0 });
  console.log('New connection...');
});

server.listen(3000, () => {
  console.log('Listening on port 3000...');
});
