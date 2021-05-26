process.on('uncaughtException', function () {
  console.log('捕获到一个异常');
});
var a = '123';
a.a(); //触发异常事件
console.log('这句话扑街了，不会显示出来');
