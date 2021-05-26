module.exports.test = 'A';

const mod = require('./module_b');
console.log('modA: ', mod.test);

module.exports.test = 'AA';
