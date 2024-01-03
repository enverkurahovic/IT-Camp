// let unetiString = prompt("Unesite string:");
// let brojac = 0;

// for (let i = 0; i < unetiString.length; i++) {
//   switch (unetiString[i]) {
//     case "0":
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//     case "5":
//     case "6":
//     case "7":
//     case "8":
//     case "9":
//       brojac++;
//       break;
//   }
// }

// console.log(brojac);

let unetiString = prompt("Unesite string:");
let brojac = 0;

for (let i = 0; i < unetiString.length; i++) {
  if (!isNaN(unetiString[i])) {
    brojac++;
  }
}

console.log(brojac);

// const recenica = "Ovo sve da bude jedna rec?";
// let recenica2 = "";

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === " ") continue;
//   else {
//     recenica3 += recenica[i];
//   }
// }
// console.log(recenica3);

const originalanaRecenica = "Danas je lep dan";
let novaRecenica = "";

for (let i = 0; i < originalanaRecenica.length; i++) {
  if (originalanaRecenica[i] === "a" && originalanaRecenica[i + 1] === "n") {
    novaRecenica += "d";
  } else if ((originalanaRecenica[i] = "a")) {
    novaRecenica += "t";
  } else {
    novaRecenica += originalanaRecenica;
  }
}

console.log(novaRecenica);
