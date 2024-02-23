// event loop
// execution, stack, event queue, web apis

// alert("hello");
// prompt

// console.log("First");

// setTimeout(() => {
//   console.log("text in set timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("text and promise");
// });

const myPromise = new Promise((resolve, reject) => {
  console.log("befor resolve");
  resolve("This text");
});

console.log("MY name is");

setTimeout(() => {
  console.log(" timeout");
}, 0);

myPromise.then((result) => {
  console.log(result);
});

console.log("this works");
