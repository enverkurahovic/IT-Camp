console.log("Nema Demira")

// JavaScript template literals
// Template Literals koristi back tics sintaksu (``) za ispisivanje stringa.

// Back Tics sintaksa
console.log(`String u drugacijoj sintaksi`)

// Navodnici unutar stringa:
// Sa Template Literals mozemo koristiti navodnike (duple ili obicne) unutar stringa.

console.log(`String u "drugacijoj" sintaksi`)
console.log(`String u 'drugacijoj' sintaksi`)

// Stringovi u vise redova

// Template literals nam omugucava multiline strings.

const recenica = `sta ako zelimo da se nadje u tekstu sta ako zelimo 
sta ako zelimo da se nadje u tekstu sta ako zelimo 
sta ako zelimo da se nadje u tekstu sta ako zelimo 
sta ako zelimo da se nadje u tekstu sta ako zelimo 
sta ako zelimo da se nadje u tekstu sta ako zelimo 
sta ako zelimo da se nadje u tekstu sta ako zelimo 
sta ako zelimo da.`

// Interpulacija - Template Literals nam omogucava lagan nacin prikazivanje promenljivih unutar stinga

const ime = "Amir"
const godine = 16

const poruka = `Nas Kolega ${ime} ima ${godine} i on je danas uradio svoj prvi domaci.`;

console.log(poruka)

// replace() metoda se koristi za menjanje specificnog karaktera ili niza karaktera odredjenog stringa.

// Po defaultu replace() metoda menja samo prvi match (prvo poglavlje)

const recenica2 = "Danas je padao Sneg. Mada veceras takodje pada sneg."

const recenica3 = recenica2.replace("sneg", "kisa")
console.log(recenica2)
console.log(recenica3)

// Za menjanje reci (case insensitive) mozemo koristiti nelegular expression sa dodatkom /i

const recenica4 = recenica2.replace(/sneg/i, "kisa")
console.log(recenica4)

// regular expression /g nam omogucava menjanje svih metcheva (poklapanja) koliko god da ih ima.

const recenica5 = recenica2.replace(/sneg/g, "kisa")
console.log(recenica5)


const recenica6 = recenica2.replace(/sneg/gi, "kisa")
console.log(recenica6)