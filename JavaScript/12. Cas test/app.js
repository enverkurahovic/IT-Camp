let broj = +prompt("Unesite broj");

for (i = broj; i <= broj; i++) {
  if (broj === 0) {
    console.log("Nije moguce");
  } else if (isNaN(broj)) {
    console.log("Uneti broj nije tacan");
  } else {
    console.log(i * 2);
  }
}

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}

let brojac = 0;

for (i = 1; i <= 50; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(i);
  }
  brojac++;
}
