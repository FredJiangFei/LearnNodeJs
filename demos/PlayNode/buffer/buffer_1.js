// alloc allocUnsafe from
// byteLength isBuffer concat

console.log('alloc: ', Buffer.alloc(10));
console.log('alloc: ', Buffer.alloc(5, 1));
console.log('allocUnsafe: ', Buffer.allocUnsafe(5, 1));
console.log('from: ', Buffer.from([1, 2, 3]));
console.log('from: ', Buffer.from('Hello'));
console.log('from: ', Buffer.from('Hello', 'base64'));
console.log('byteLength: ', Buffer.byteLength('test'));
console.log('byteLength: ', Buffer.byteLength('测试'));

console.log('isBuffer: ', Buffer.isBuffer('测试'));
console.log('isBuffer: ', Buffer.isBuffer(Buffer.from('测试')));

const buf1 = Buffer.from('This ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('Buffer ');
console.log(Buffer.concat([buf1, buf2, buf3]).toString());

var b = Buffer.alloc(10);
b[0] = 255;
console.log(b);
