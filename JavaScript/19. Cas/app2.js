// Domaci:
// Ekstraktovanje teksta:

// Iz stringa recenica4 izdvojite reč "ako" i ispišite je.
// Iz stringa recenica5 izdvojite prvu rečenicu i ispišite je.
const recenica1 = "sta ako danas lala"
const isecak = recenica1.slice(4,7);
console.log(isecak)


// Formatiranje teksta:

// Napravite novi string koji će sadržavati vrednost iz recenica6 sa velikim slovima.
// Zamolite korisnika da unese svoje ime i napravite personalizovanu poruku koristeći concat.

let recenica6 = "Ovo je primer rečenice.";
let noviString = recenica6.toUpperCase();
let ime = prompt("Unesite svoje ime:");
let  personalizovanaPoruka = "Cao " + ime + "! " + noviString;

console.log(personalizovanaPoruka);


// Manipulacija dužinom teksta:

// Iz stringa recenica4 izdvojite poslednjih 5 karaktera i ispišite ih.
// Izračunajte dužinu stringa koji sadrži spajanje stringova ime i prezime sa razmakom.

let recenica4 = "Ovo je primer recenice4";
let poslednjih5 = recenica4.slice(-5);
console.log( poslednjih5);
let imee = "Enver";
let prezime = "Kurahovic";
let duzinaImePrezime = (imee + " " + prezime).length;

console.log("Duzina stringa ime i prezime: " + duzinaImePrezime);


// Uklanjanje razmaka:

// Iz stringa email uklonite sve razmake sa obe strane koristeći trim i ispišite rezultat.

const email = "      ekisha818@gmail.com    "
console.log(email)
console.log(email.length)
console.log(email.trim())
console.log(email.trim().length)
