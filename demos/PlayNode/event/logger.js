const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(name) {
    console.log(`Hello ${name}`);
    this.emit('messagelog', { name: name });
  }
}

module.exports = Logger;
