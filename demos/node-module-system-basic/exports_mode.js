// var exports = module.exports;

var sayHello = function() {
  console.log('hello');
};

exports.sayHello = sayHello;

console.log('exports: ', exports);
console.log('module.exports: ', module.exports);
console.log('equal: ', exports === module.exports);
