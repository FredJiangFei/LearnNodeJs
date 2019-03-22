const { spawn } = require('child_process');

const child = spawn('node', ['./child_process/child.js']);
// const child = spawn('find', ['.', '-type', 'f']);

child.stdout.on('data', data => {
  console.log(`Child stdout: ${data}`);
});

child.stderr.on('data', data => {
  console.error(`Child stderr: ${data}`);
});

child.on('exit', function(code, signal) {
  console.log(`Code: ${code}, Signal: ${signal}`);
});

// other events: disconnect, error, message, close
// stido objects: child.stdin, child.stdout, child.stderr
