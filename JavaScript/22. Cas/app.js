// include() metoda - vraca boolean u zavisnosti od toga da li odredjen string sadrzi specificau vrednost.
// includes(searchValue, start) start predstavlja poziciju od koje pocije trazenje

const recenica = "Hvala vam na iznenadjenju";
console.log(recenica.includes("poklon"));

// startWith() - metoda vraca true ako string pocinje argument metode. a false ako ne pocinje tim argumentom.
// // startWith(searchValue, start) start predstavlja poziciju od koje pocije trazenje

console.log(recenica.startsWith("Hvala"));
console.log(recenica.startsWith("Hvala", 6));
console.log(recenica.startsWith("V", 6));

// endsWith() - metoda vraca true ako string zavrsava argument metode. a false ako ne zavrsava tim argumentom.

console.log(recenica.endsWith("Hvala"));
console.log(recenica.endsWith("iznenadjenju"));

// match() - Vraca niz sa stringovima koji se podudaraju sa argumentom.

const pozdrav = "Dobro jutro, Dobar dan, dobro vece";
const matchNiz = pozdrav.match(/Dobro/gi);
console.log(matchNiz); // Niz sa /Dobro/gi vrednostima iz pozdrav stringa
console.log(matchNiz.length); // Broj pojavljivanja /Dobro/gi u pozdrav stringu

function brCf(recenica) {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++);
  {
    if (!isNaN(recenica[i]) && recenica[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
}

console.log(brCf("Veceras nas ima 10."));
