process.on('message', function(m) {
  console.log('CHILD got message:', m);
});
// process.send({ foo: 'bar' });

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});

process.on('exit', function() {
  setTimeout(function() {
    console.log('This will not run');
  }, 100);
  console.log('exit');
});
