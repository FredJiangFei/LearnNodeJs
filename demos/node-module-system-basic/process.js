// 监听器函数必须只执行同步操作。 在调用 'exit' 事件监听器之后，
// Node.js 进程将立即退出，从而导致在事件循环中仍排队的任何其他工作被放弃。 例如，在以下示例中，定时器中的操作不会发生
process.on('exit', function(code) {
  setTimeout(function() {
    console.log('This will not run');
  }, 0);

  console.log('About to exit with code:', code);
});
process.on('beforeExit', function(code) {
  console.log('About to beforeExit with code:', code);
});
// process.exit(2);
console.log('Program Ended');
