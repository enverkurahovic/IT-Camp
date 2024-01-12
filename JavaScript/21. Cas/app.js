// Ekstraktovanje karaktera mozemo odraditi na 3 razlicita nacina:

// charAt(position)
// charCodeAt(position)
// Pristupanje pomocu []

const recenica = "Jos max 10 dana";
console.log(recenica.charAt(5));
console.log(recenica.charCodeAt(5));
console.log(recenica[5]);

// Ako karakter sa odredjenom pozicijom ne postoji charAt vraca prazan "" dok string[*] vraca undefined

// Postoji nekoliko search metoda u JavaScript

// Index0F() metoda vraca index (poziciju) poslatog argumenta.

console.log(recenica.indexOf("max"));
console.log(recenica.indexOf("1"));

// Ako trazena vrednost ne postoji pozicija koju dobijamo iznosi -1.

console.log(recenica.indexOf("skola"));

// index0f metoa prihvata drugi argument. On predstavlja startnu poziciju za trazenje odredjene vrednosti

console.log(recenica.indexOf("max", 7));
console.log(recenica.indexOf("a", 7));

// lastindex0f() metoda vraca poslednju poziciju poslatog argumenta.

console.log(recenica.lastIndexOf("a"));

// search() metoda vraca index (poziciju) poslatog argumenta.

console.log(recenica.search("max"));
console.log(recenica.search("a"));
// Drugi argument kod search metode nema smisla.
console.log(recenica.search("max", 7));
