// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni
let z = 2;
while (z <= 10) {
  console.log(z);
  z = z + 2;
}

let c = 1;
while (c <= 10) {
  if (c % 2 === 0) {
    console.log(c);
  }
  c++;
}

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.
var prviBroj = +prompt("Unesite prvi broj:");
var drugiBroj = +prompt("Unesite drugi broj:");

var manjiBroj, veciBroj;

if (prviBroj < drugiBroj) {
  manjiBroj = prviBroj;
  veciBroj = drugiBroj;
} else {
  manjiBroj = drugiBroj;
  veciBroj = prviBroj;
}

console.log("Brojevi od " + manjiBroj + " do " + veciBroj + " su:");

while (manjiBroj <= veciBroj) {
  console.log(manjiBroj);
  manjiBroj++;
}

// Razni zadaci:
// https://www.znanje.org/knjige/computer/algoritmi/88_quiz/ciklicna_for_0.php

// Proizvod neparnih 1 do 5.
// let proizvod = 1;
// for (let i = 1; i < 6; i++) {
//   if (i % 2 !== 0) {
//     proizvod *= i;
//   }
// }
// console.log(proizvod);
