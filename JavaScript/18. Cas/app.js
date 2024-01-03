// let ime = prompt("Unesite ime");

// while (ime.length < 6) {
//   ime = prompt("Unesite ime");
// }

// const isSunny = false;

// if (isSunny) {
//   console.log("Napolje je suncano");
// } else if (!isSunny) {
//   console.log("Napolje nije suncano");
// }

// TRUTHY i FALSY vrednosti nam olaksavanju pisanje uslova.
// Ako je vredonost TRUTHY, to znaci da je uslov zadovoljen i da ce se izvrsiti kod koji sledi.
// Ako je vredonost FALSY, to znaci da je uslov nije zadovoljen i da se nece izvrsiti kod koji sledi.
// Postoji 8 FALSY vrednosti"

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null

// let nesto = prompt("Unesite bilo sta");

// while (!nesto) {
//   nesto = prompt("Unesite bilo sta");
// }

const nzm = () => {
  const nesto = prompt("Unesite bilo sta");
  if (!nesto) {
    return "Ova vrednost je False";
  } else if (nesto) {
    return "Ova vrednost je Truth";
  }
};

console.log(nzm());
