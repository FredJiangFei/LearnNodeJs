const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('P1');
    resolve(1);
    // reject(new Error('error'));
  }, 2000);
});

// p1.then(result => {
//   console.log('Result', result);
// }).catch(err => console.log('Error', err.message));

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('P2');
    resolve(2);
  }, 1000);
});

// all race
Promise.all([p1, p2]).then(res => console.log(res));

// async await
