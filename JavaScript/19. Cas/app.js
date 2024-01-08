// STRINGOVI SU IMMUTABLE VREDNOSTI

// const recenica = "Danas je bio 'suncan' dan."
// const recenica2 = 'Danas je bio "suncan" dan.'

const recenica3 = "Danas je bio \"suncan\" dan.";
console.log(recenica3);

const recenica4 = "sta ako zelimo \\ da se nadje u tekstu?"
console.log(recenica4);

const recenica5 = "sta ako zelimo da se nadje u tekstu sta ako zelimo \
sta ako zelimo da se nadje u tekstu sta ako zelimo \
sta ako zelimo da se nadje u tekstu sta ako zelimo \
sta ako zelimo da se nadje u tekstu sta ako zelimo \
sta ako zelimo da se nadje u tekstu sta ako zelimo \
sta ako zelimo da se nadje u tekstu sta ako zelimo \
sta ako zelimo da."

console.log(recenica5);

const recenica6 = "sta ako zelimo da se nadje u tekstu \nsta ako zelimo da se nadje u tekstu sta ako zelimo \nsta ako zelimo da se nadje u tekstu sta ako zelimo \nsta ako zelimo da se nadje u tekstu sta ako zelimo \nsta ako zelimo da se nadje u tekstu sta ako zelimo \nsta ako zelimo da."

console.log(recenica6);

// Postoje 3 metode za ekstarktovanje dela stringa

// slice(start, end) start se ukljucuje, end se ne ukljucuje

const isecak = recenica4.slice(0,3);

console.log(isecak);
console.log(recenica4.slice(8,recenica4.length)) // do kraja 
console.log(recenica4.slice(8)) // do kraja (izostavljanjem drugog argumenta uzmiamo ostatak stringa)

// slice metoda prihvata negativne index
console.log(recenica4.slice(-7)) 

// substring(start, end) start se ukljucuje, end se ne ukljucuje
// substring metoda ne prihvata negativne indexe

console.log(recenica4.substring(0,3)) 

// substr(start, lenght)
// Drugi argument predstavlja duzinu isecka.
console.log(recenica4.substr(4,10)) 

const rec = "rec"

console.log(rec.toUpperCase()) // Pravi Novi string (ne menja postojeci)

// concat() metoda za spajanje stringova
// Ova metoda spaja dva ili vise stringova

const ime = "Demir"
const prezime = "Miraljevic"

console.log(ime + " " + prezime);
const imeIPrezime = ime.concat(" ",prezime);
console.log(imeIPrezime)

// trim() kosacica - brise razmake na krajevima

const email = "    ekisha818@gmail.com    "
console.log(email)
console.log(email.length)
console.log(email.trim())
console.log(email.trim().length)