// While petlje se koriste za iteraciju kroz neki objekat.
// definise se drugacije u odnosu na for petlju

// vreme = "Suncano";
// while (vreme === "Suncano") {
//   console.log("Danas je lep dan");
//   vreme = "Kisovito";
// }

let i = 1;
while (i < 6) {
  console.log(i);
  // Kad zavrsimo celu logiku za kod pod odredjenim uslovom moramo menjati i.
  i++;
}

// do-while petlje se koriste za iteraciju kroz neki objekat.
// Razlikuje se u odnosu na while petlju je sto se prvo izvrsava kod pa tek onda proverava uslov.

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

// nedostatak:

let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

const broj = +prompt("Unesite broj");
let a = 1;
while (a <= broj) {
  console.log(a ** 2);
  a++;
}

let korisnikovBroj = +prompt("Unesite broj");
while (korisnikovBroj !== 0) {
  korisnikovBroj = +prompt("Unesite broj");
}
let proizvod = 1;
for (i = 1; i < 6; i++) {
  if (i % 2 !== 0) {
    proizvod *= i;
  }
}
console.log(proizvod);
