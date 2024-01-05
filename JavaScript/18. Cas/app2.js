// 1. Primer ako korisnik unosi broj:(isti zadatak, ali posmatrati brojeve)
const nzm = () => {
  const nesto = +prompt("Unesite broj");
  if (!nesto) {
    return "Ova vrednost je False";
  } else if (nesto) {
    return "Ova vrednost je Truth";
  }
};

console.log(nzm());

// 2. Korisnik unosi svoje ime. Proveriti da li je uneto ime truthy vrednost (nije prazan string, undefined ili null).
// Ako je uneto ime truthy, ispisati korisnikovo ime, inače ispisati da korisnik nema definisano ime.

const ime = prompt("Unesite svoje ime");

if (ime) {
  console.log(ime);
} else {
  console.log("Nemate definisano ime");
}

// 3. Korisnik unosi broj. Proveriti da li je uneti broj falsy vrednost (0 ili NaN). Ako je uneti broj falsy, ispisati poruku da korisnik nema definisan broj, inače ispisati uneti broj.

const imeBr2 = +prompt("Unesite neki broj");

if (isNaN(imeBr2) || !imeBr2) {
  console.log("Nemate definisano broj");
} else {
  console.log(imeBr2);
}

// 4. Definisati promenljivu koja nije inicijalizovana. Proveriti da li je vrednost promenljive falsy (undefined).
// Ako je vrednost falsy, ispisati poruku da korisnik nema definisanu vrednost, inače ispisati vrednost promenljive.
let neinicijalizovanaPromenljiva;

if (!neinicijalizovanaPromenljiva) {
  console.log("Nemate definisanu vrednost.");
} else {
  console.log("Vrednost promenljive je: " + neinicijalizovanaPromenljiva);
}
