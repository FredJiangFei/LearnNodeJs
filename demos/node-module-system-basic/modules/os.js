const os = require('os');

console.log('OS platform:', os.platform());

console.log('OS CPU architecture:', os.arch());

console.log('# of logical CPU cores', os.cpus().length);

console.log('Home directory for current user', os.homedir());

console.log('line 1' + os.EOL + 'line 2' + os.EOL + 'line 3');

var toMb = function(f) {
  return Math.round((f / 1024 / 1024) * 100) / 100;
};

console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free');
