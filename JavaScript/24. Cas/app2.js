const pera = "Pera";

let epar = "";

for (let i = 0; i < pera.length; i++) {
  if (pera.length % 2 === 0 && pera.length - 1) {
    epar += pera[i];
  } else if (i % 2 === 0) {
    epar += pera[i + 1];
  } else if (i % 2 !== 0) {
    epar += pera[i + 1];
  }
}

console.log(epar);
