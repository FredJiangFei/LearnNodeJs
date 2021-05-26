const Logger = require('./logger');

const logger = new Logger();
logger.on('messagelog', (args) => {
  console.log(`Message log ${args.name}`);
});
logger.log('Fred');
console.log(arguments.callee + '');
