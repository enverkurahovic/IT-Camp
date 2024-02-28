// promises
// promise chaining,reject,resolve,then,catch,finaly

// create promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//     if (rand > 0.5) {
//       console.log("we are in resolve");
//       resolve("resolve");
//     }
//     console.log("we are in reject");
//     reject("reject");
//   }, 1000);
// });

// const promise2 = new Promise((resolve) => {
//   console.log("IM promise2");
// });

// console.log(promise);

// promise
//   .then((result) => {
//     console.log("I am at beggining of first then");
//     console.log(result);
//     return Promise.resolve("Second promise");
//   })
//   .then((result) => {
//     console.log("I am at the beggining od second then");
//     console.log(result);
//     return Promise.reject("Third reject");
//   })
//   .catch((reject) => {
//     console.log(reject);
//   })
//   .finally(() => {
//     console.log("I happen every time");
//   });

// fetchApi

fetch();
