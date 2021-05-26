var exports_mode = require('./exports_mode');
exports_mode.sayHello();

var module_exports_mode = require('./module_exports_mode');
var xiaoming = new module_exports_mode();
xiaoming.sayHello();
// xiaoming.a();
