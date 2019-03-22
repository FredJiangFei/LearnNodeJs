// var sayHello = function() {
//   console.log('hello');
// };

// module.exports = sayHello;

var xiaoming = function(name) {
  this.name = name;
  this.sayHello = function() {
    return 'hello ' + this.name;
  };
  this.sayGoodBye = function() {
    return 'goodbye ' + this.name;
  };
};

module.exports = xiaoming;

console.log('exports: ', exports);
console.log('module.exports: ', module.exports);
console.log('equal: ', exports === module.exports);
