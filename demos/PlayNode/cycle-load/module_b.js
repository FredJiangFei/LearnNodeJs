module.exports.test = 'B';

const mod = require('./module_a');
console.log('modB: ', mod.test);

module.exports.test = 'BB';
