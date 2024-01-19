// Domaci:
// 1.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

function brojMalihSlova(str) {
  let brojac = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      brojac++;
    }
  }

  return brojac;
}

let unetiTekst = prompt("Unesite tekst:");
let rezultat = brojMalihSlova(unetiTekst);

console.log("Broj malih slova: " + rezultat);

// 2.	Ispitati da li u unetom stringu ima više malih ili velikih slova. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.
function proveriMalaiVelikaSlova(str) {
  let brojacMala = 0;
  let brojacVelika = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      brojacMala++;
    } else if (str[i] >= "A" && str[i] <= "Z") {
      brojacVelika++;
    }
  }

  if (brojacMala > brojacVelika) {
    console.log("Vise malih slova");
  } else if (brojacMala < brojacVelika) {
    console.log("Vise velikih slova");
  } else {
    console.log("Jednako malih i velikih slova");
  }
}

let nekiTekst = prompt("Unesite tekst");
proveriMalaiVelikaSlova(nekiTekst);

// 3.	Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.

function jePalindrom(noviStr) {
  var ociscenString = noviStr.toLowerCase().replace(/\s/g, "");
  var inverzniString = ociscenString.split("").reverse().join("");
  return ociscenString === inverzniString;
}

var noviTekst = prompt("Unesite tekst");
if (jePalindrom(noviTekst)) {
  console.log("Uneti tekst je palindrom");
} else {
  console.log("Uneti tekst nije palindrom");
}
