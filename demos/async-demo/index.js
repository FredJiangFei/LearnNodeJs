// Callback
console.log('Start');
getUser(1, user => {
  console.log('user', user);
});
console.log('End');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading data.....');
    callback({ id: id, name: 'fred' });
  }, 2000);
}

// Promise
getRespo('fred')
  .then(res => getCommint(res[0]))
  .then(commits => console.log('Commints', commits));

function getRespo(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Geting respos.....');
      res(['res1', 'res2']);
    }, 2000);
  });
}

function getCommint(respo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Geting commits.....');
      res(['comm1', 'comm2']);
    }, 2000);
  });
}

//  Promise
