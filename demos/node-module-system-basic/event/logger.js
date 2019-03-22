const EventEmitter = require('events');
// (function(exports, require, module, __filename, __dirname) {
// console.log(exports);
// console.log(require);
// console.log(module);
// console.log(__filename);
// console.log(__dirname);

// });

class Logger extends EventEmitter {
  log(name) {
    console.log(`Hello ${name}`);
    this.emit('messagelog', { name: name });
  }
}

module.exports = Logger;
