var cp = require('child_process');

cp.execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    console.error('stderr', stderr);
    throw error;
  }
  console.log('stdout', stdout);
});
