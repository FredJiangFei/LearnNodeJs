const { exec } = require('child_process');

module.exports = (url) => {
  exec(`start ${url}`);
};
