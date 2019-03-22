process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log('stdout is writable? ' + process.stdout.writable);

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', function() {
  process.stderr.write('End!\n');
});

process.on('SIGTERM', function() {
  process.stderr.write('Why are you trying to terminate me?!?  :-)');
});

console.log('Node is running as process #' + process.pid);
