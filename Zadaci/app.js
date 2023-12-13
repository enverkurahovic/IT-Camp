// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 20; i = i + 2) {
  console.log(i);
}

// 2.
// Ispisati parne brojeve od 1 do 20 na dva nacina.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}

// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
for (let i = 6; i <= 14; i++) {
  if (i) {
    console.log(2 * i);
  }
}

// 4.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

for (i = 50; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
