const conf = require('./config/defaultConfig');
const http = require('http');
const fs = require('fs');
const openUrl = require('./openUrl');

class Server {
  constructor(config) {
    this.conf = Object.assign({}, conf, config);
  }

  start() {
    const server = http.createServer((req, res) => {
      fs.readdir('./', (err, files) => {
        res.end(files.join(','));
      });
    });

    server.listen(this.conf.port, () => {
      console.log('Listen.....');
      const addr = `http://localhost:${this.conf.port}/`;
      openUrl(addr);
    });
  }
}

module.exports = Server;
