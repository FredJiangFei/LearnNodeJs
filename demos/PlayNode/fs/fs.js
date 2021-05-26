const fs = require('fs');

// 列出文件
fs.readdir('./', (err, files) => {
  console.log(files);
});

fs.open('built-in/hello.txt', 'w', (err, fd) => {
  fs.write(fd, 'Today is friday', (err) => {
    fs.close(fd, (err) => {});
  });
});

// writeFile
