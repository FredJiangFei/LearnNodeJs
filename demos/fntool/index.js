// https://www.jianshu.com/p/1c5d086c68fa
const Server = require('./server');
const yargs = require('yargs');

const argv = yargs
  .usage('anywhere [options]')
  .option('p', {
    alias: 'port',
  })
  .version()
  .alias('v', 'version')
  .help().argv;

const server = new Server(argv);
server.start();
