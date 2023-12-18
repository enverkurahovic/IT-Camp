// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 4; i <= 8; i++) {
//   console.log(i);
// }

// for (let i = 8; i <= 16; i++) {
//   console.log(i);
// }

// for (let i = 15; i <= 27; i++) {
//   console.log(i);
// }

// const a = +prompt("Unesite broj");
// for (i = 1; i <= a; i++) {
//   console.log(i);
// }

// const b = +prompt("Unesite broj");
// const c = +prompt("Unesite broj");

// for (i = b; i <= c; i++) {
//   console.log(i);
// }

// for (let i = 23; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 23; i >= 1; i--) {
//   console.log(i * 2);
// }

// let proizvod = 1;
// for (i = 1; i <= 5; i++) {
//   proizvod += i;
//   console.log(proizvod);
// }

// let proizvo = 1;

// for (let i = 3; i <= 8; i++) {
//   proizvo *= i * 3;
// }

// console.log(proizvo);

// const k = +prompt("Unesite broj");
// const n = +prompt("Unesite broj");
// let suma = 0;
// for (i = k; i <= n; i++) {
//   suma += i;
// }
// console.log(suma);

// for (i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

function aritmetickaSredina(k, n) {
  let suma = 0;
  let brojac = 0;

  // Petlja prolazi kroz sve brojeve u intervalu od k do n
  for (let i = k; i <= n; i++) {
    // Provjerava se da li je trenutni broj djeljiv sa 3
    if (i % 3 !== 0) {
      suma += i; // Dodajemo broj u sumu
      brojac++; // Povećavamo brojač
    }
  }

  // Ako postoji barem jedan broj koji nije djeljiv sa 3, izračunava se aritmetička sredina
  if (brojac > 0) {
    return suma / brojac;
  } else {
    return "Nema brojeva u intervalu koji nisu djeljivi sa 3.";
  }
}

// Primjer poziva funkcije
let k = 3;
let n = 17;
let rezultat = aritmetickaSredina(k, n);

console.log("Aritmetička sredina: " + rezultat);
