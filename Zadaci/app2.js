// 1.
// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

for (let i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
  }
}

// 2.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.
let skup = 0;
let broj = 0;

for (let i = 3; i <= 17; i++) {
  if (i % 3 === 0) {
    skup += i;
    broj++;
  }
}
const aritmetickaSredina = skup / broj;

console.log(
  "Aritmetička sredina brojeva deljivih sa 3 je: " + aritmetickaSredina
);
