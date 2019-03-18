const path = require('path');

// console.log(path.parse(__filename));

// path.dirname(path)
console.log(path.dirname('E:\\MySolutions\\LearnNodeJs\\documents'));

// path.basename
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));

// path.extname
console.log('path.extname: ', path.extname('index.html'));
console.log('path.extname: ', path.extname('index.coffee.md'));

// path.format
console.log(
  'path.format: ',
  path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
  })
);

// path.isAbsolute 检测 path 是否为绝对路径。

// path.join([...paths]) 使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
console.log(
  'joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..')
);

// Normalization
console.log(
  'normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..')
);

// path.parse(path) 返回一个对象，其属性表示 path 的重要元素
console.log('path.parse:', path.parse('/home/user/dir/file.txt'));

// Resolve // 将路径或路径片段的序列解析为绝对路径
console.log('resolve : ' + path.resolve('main.js'));
console.log('resolve : ' + path.resolve('/foo/bar', './baz'));
console.log('resolve : ' + path.resolve('/foo/bar', '/tmp/file/'));
console.log(
  'resolve : ' +
    path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
);
