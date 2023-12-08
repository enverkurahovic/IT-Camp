// Za interaciju sa korisnikom koristimo prompt metodu.

const fullName = prompt("Unesite vase ime i prezime");
console.log(fullName);

const age = prompt("Unesite vas broj godina");
console.log(age);
console.log(typeof age);

// Vrednost dobijena preko prompt metode je uvek tipa string
// Taj string se moze prevesti u tip number na nekoliko nacina:

// 1. Number(age)
const brojGodinaa = Number(age);
console.log(brojGodinaa);
console.log(typeof brojGodinaa);

// 2. +age
const brojGodina2 = +age;
console.log(brojGodina2);
console.log(typeof brojGodina2);
// const visina = Number(prompt("Unesite vasu visinu"))
const visina = +prompt("Unesite vasu visinu");
console.log(visina);
console.log(typeof visina);

// isNaN() je metoda koja proverava da li je neka vrednost nekorektan broj (NaN).

console.log(isNaN("55")); // false
console.log(isNaN("5ewe5")); // true

const brojGodina = prompt("Unesite vas broj godina");

if (brojGodina <= 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina < 12 || brojGodina <= 17) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina <= 39) {
  console.log("Vi ste punoletni");
} else if (brojGodina >= 40) {
  console.log("Vi ste zrela osoba");
} else if (brojGodina < 0) {
  console.log("Broj godina ne moze biti negativan");
} else {
  console.log("Niste uneli broj godina");
}
