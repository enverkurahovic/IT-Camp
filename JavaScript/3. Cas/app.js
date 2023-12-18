// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:

// 1. innerHTML

paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Naslov";

// 2. document.write() - koristi se samo za testiranje

// 3. alert()
// alert("Upozorenje korisniku.");

// 4. console.log()
console.log(paragraf.innerHTML);

// JavaScript name mora da pocinje sa:

// 1.  Slovom (velikim ili malim) (A-Z ili a-z)
// 2.  $ (dolarm znakom)
// 3.  _ (donjom crtom)

// Promenljive od vise reci:

// Nas brat = "Demir" nije isprvan nacin
// nas_brat = "Demir" snake case
// NasBrat = "Demir" lower camel case
nasBratDobri = "Demir"; // upper camel case

// Npomena. U nazivu promenljive (varijabla) se moze naci broj, ali on ne sme poceti brojem.

amir = "Amir je odlican ucenik druge godine srednje skole";
Amir = "Amir je dovoljan ucenik druge godine srednje skole";

// JavaScript je case sensitive!!! (razlikuje velika i mala slova)

console.log(Amir);

// Postoje 4 nacina da deklarisemo promenljivu u JavaScriptu:

// 1. koriscenjem var keyword (rezervisane reci) - prvenstveno koriscen na ranijim browserima;

// var prijatno = "Prijatono": primer istovremenog deklarisanja i incijalizovanja promenljive
var prijatno; // deklarisanje promenljive

console.log(prijatno); // undefined
console.log(typeof prijatno); // undefined

prijatno = "Prijatno"; // inicijalizacija deklarisane promenljive prijatno

// 2.  koriscenjem let keyword (rezervisane reci) - koristimo kada je vrednost promenljive (varijable) sklono menjanju

// let brojGodina = 25  primer istovremenog deklarisanja i incijalizovanja promenljive pomoci let

let brojGodina; // deklarisanje promenljive
brojGodina = 27; // inicijalizacija deklarisane promenljive prijatno

// 2.  koriscenjem const keyword (rezervisane reci) - koristimo kada za vrednosti koje se ne menjaju.

// const ime = "Dzenan";  primer istovremenog deklarisanja i incijalizovanja promenljive pomocu const

// Koriscenjem const keyword nije dozvoljeno posebno inicijalizovanje, vec mora uz deklaraciju zajdeno.
// const ime;
// ime = "Dzenan"

// 4. koriscenjem niceg.

mervan = "Mervan";

// Napomena.
// Promenljive (varijable) su kontejneri za skladistenje vrednosti.
