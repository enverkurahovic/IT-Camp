// Funkcija je kod koji mozemo koristiti, koji pokrece set instrukcija. Koristimo ga kako bi jedan isti kod mogli izvrsiti vise puta. Funkcije se koriste kako bi smo mogli nas kod da organizujemo bolje.

// Jos jedan razlog zbog kojeg se koriste funkcije jeste to kako bi smo mogli da kreiramo varijable unutar funkcije koje su function scope a da te iste varijable nisu dostupne unutar global scope-a

// function printHelloWorld() {
//   let a = 1;
//   a = 5;
//   console.log(a);
// }

// Postoje tri glavna nacina na koje mozemo deklarisati funkcije

// Deklaracija Funkcije
function printHelloWorld1() {
  console.log("Deklaracija Funkcije");
}

printHelloWorld1();

// Function expression
const printHelloWorld2 = function () {
  console.log("Hello World");
};

printHelloWorld2();

// Arrow function

// const printHelloWorld3 = () => {
//   console.log("Ovo je arrow funkcija");
// };

// Arrow funkcija se uglavnom sluzi za ispitivanje manje ili jednog seta instrukcija ako imamo kod koji se moze ispisati u jednoj liniji koda za takav kod najvise koristimo arrow funkcije
const printHelloWorld3 = () => console.log("Ovo je arrow funkcija");

printHelloWorld3();

// Arrow funkcija se uglavnom sluzi za ispitivanje manje ili jednog seta instrukcija ako imamo kod koji se moze ispisati u jednoj liniji koda za takav kod najvise koristimo arrow funkcije

// Takodje funkcije mogu prihvatati argumente
// Broj argumenata moze biti razlicit u odnosu na to koliko nam istih treba upotpunili nasu funkciju

// Postoje tri fraze koje su sastavni deo funkcije to su:
// 1. Parametar
// 2. Argumenti
// 3. Return

// Parametre unutar funkcije uvek ostavljamo u obicnim zagradam

function pozdrav(ime) {
  console.log("Cao " + ime);
}

pozdrav("Harise");

function brBr(broj1, broj2) {
  console.log(broj1 + broj2);
}

brBr(5, 5);

// Return ---> return moze vratiti vrednost koju mi deklarisemo unutar funkcije.
// Return sluzi za vracanje vrednosti unutar funkcije
const nekiReturn = function (br1, br2) {
  let rezultat = br1 + br2;
  return rezultat;
};

// console.log(nekiReturn(2, 3));

const finalniRezultat = nekiReturn(2, 5);
console.log(finalniRezultat * 2);

const nekeFunkc = function (e, c, d) {
  return d * (e + c);
};

console.log(nekeFunkc(2, 3, finalniRezultat));
