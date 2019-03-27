var cp = require('child_process');

var ls = cp.spawn('cmd', ['/c', 'dir']);
ls.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

ls.on('exit', function(code) {
  console.log('child process exited with code ' + code);
});
