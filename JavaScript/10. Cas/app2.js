const broj1 = +prompt("Unesite prvi broj");
const broj2 = +prompt("Unesite drugi broj");

if (isNaN(broj1) || isNaN(broj2)) {
  console.log("Niste uneli brojeve");
} else if (broj1 === broj2) {
  console.log("Uneli ste jednake brojeve");
} else if (broj1 > broj2) {
  for (let i = broj2; i <= broj1; i++) {
    console.log(i);
  }
} else {
  for (let i = broj1; i <= broj2; i++) {
    console.log(i);
  }
}

// switch (new Date().getDay()) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("Danas je radni dan");
//     break;
//   //   case 0:
//   //   case 6:
//   default:
//     console.log("Ugodono provedite vikend");
// }
let zbir = 0;
for (let i = 1; i <= 10; i++) {
  zbir += i;
  console.log(zbir);
}

const z = +prompt("Unesite neku vrednost");

let broj = 0;
for (i = 1; i <= 10; i++) {
  broj % 5 === 0;
  console.log(broj);
}

const n = +prompt("Unesite neku vrednost");
let saberi = 0;
let brBr = 0;
for (i = 1; i < n; i++) {
  if (i % 5 === 0) {
    saberi += i;
    brBr += 1;
  }
}
console.log(brBr);
console.log(saberi);
