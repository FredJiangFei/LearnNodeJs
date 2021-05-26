const http = require('http');
const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const { createGzip } = require('zlib');

const server = http.createServer((req, res) => {
  const filePath = path.join(process.cwd(), req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.end('Error 123');
      return;
    }

    if (stats.isFile()) {
      let rs = fs.createReadStream(filePath);
      rs.pipe(res); // res.setHeader('Content-Type', 'gizp'); .pipe(createGzip())
    }

    if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        res.end(files.join(','));
      });
    }
  });
});

server.listen(3000);
