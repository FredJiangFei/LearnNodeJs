module.exports = function () {
  this.sayHello = function () {
    console.log('hello');
  };
};

exports.a = 'A';

// console.log('exports: ', exports);
// console.log('module.exports: ', module.exports);
// console.log('equal: ', exports === module.exports);
