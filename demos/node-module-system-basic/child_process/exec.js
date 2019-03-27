var cp = require('child_process');

cp.exec('dir', { encoding: 'utf-8' }, function(err, stdout, stderr) {
  if (err) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('data : ' + stdout);
}).on('exit', function(code) {
  console.log('子进程已退出, 退出码 ' + code);
});
