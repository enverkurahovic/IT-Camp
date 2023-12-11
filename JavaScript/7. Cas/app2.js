const brojGodina = +prompt("Unesite vas broj godina");

if (brojGodina < 0) {
  console.log("Broj godina ne moze biti negativan");
} else if (brojGodina <= 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina >= 12 && brojGodina <= 17) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina <= 39) {
  console.log("Vi ste punoletni");
} else if (brojGodina >= 40) {
  console.log("Vi ste zrela osoba");
} else if (isNaN(brojGodina)) {
  console.log("Niste uneli broj godina");
}

// Provera broja:
// Napiši program koji će tražiti od korisnika da unese broj, a zatim ispiši poruku koja će reći da li je broj pozitivan, negativan ili nula.

const unetiBroj = +prompt("Unesite broj");
if (isNaN(unetiBroj)) {
  console.log("Niste uneli broj");
} else if (unetiBroj < 0) {
  console.log("Broj je negativan");
} else if (unetiBroj === 0) {
  console.log("Broj je jednak nuli");
} else if (unetiBroj > 0) {
  console.log("Broj je pozitivan");
}

// Ocena studenta:
// Napiši program koji će korisnika pitati za unos ocene (broj između 0 i 100) i ispisati odgovarajuću ocenu (A, B, C, D ili F) prema standardnom školskom sistemu ocenjivanja.

const brojBodova = +prompt("Unesite broj bodova");

if (isNaN(brojBodova)) {
  console.log("Molim vas unesite broj bez slova");
} else if (brojBodova > 100) {
  console.log("Taj broj nije dostupan");
} else if (brojBodova >= 90) {
  console.log("Vasa ocena je A");
} else if (brojBodova >= 80) {
  console.log("Vasa ocena je B");
} else if (brojBodova >= 70) {
  console.log("Vasa ocena je C");
} else if (brojBodova >= 60) {
  console.log("Vasa ocena je D");
} else if (brojBodova >= 50 || brojBodova < 50) {
  console.log("Vasa ocena je F");
}

// Provera parnosti broja:
// Napiši program koji će korisnika pitati za unos broja, a zatim ispisati poruku da li je broj paran ili neparan.

const broj = +prompt("Unesite broj ");

if (isNaN(brojBodova)) {
  console.log("Molim vas unesite broj bez slova");
} else if (broj % 2 === 0) {
  console.log("Broj je paran");
} else {
  console.log("Broj je neparan");
}

// Upoređivanje dva broja:
// Napiši program koji će tražiti od korisnika da unese dva broja, a zatim ispisati poruku koja će reći koji od ta dva broja je veći, ili da su jednaki.

const broj1 = +prompt("Unesite broj1");
const broj2 = +prompt("Unesite broj2");

if (isNaN(broj1, broj2)) {
  console.log("Molim vas unesite brojeve bez slova");
} else if (broj1 > broj2) {
  console.log("Broj jedan je veci");
} else if (broj1 < broj2) {
  console.log("Broj dva je veci");
} else {
  console.log("Brojevi su jednaki");
}
