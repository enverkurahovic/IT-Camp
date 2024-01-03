const zbir = 10 + 7;
console.log(zbir);

function zbirFunk(br1, br2) {
  const zbir = br1 + br2;
  return zbir;
}
console.log(zbirFunk(5, 8));

// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja.
// const zbirKvadrata = (a, b) => {
//   return a ** 2 + b ** 2;
// };

// console.log(zbirKvadrata(3, 4));

// Ako je funkcija jednostavna, ima jedan return onda mozemo izostaviti viticaste zagrade i return keyword.
// const zbirKvadrata = (a, b) => a ** 2 + b ** 2;

// console.log(zbirKvadrata(3, 4));

// 2. Napraviti funkciju koja vraca zbir kvadrata dva broja.
// Ako se izostavi drugi argument, funkcija ga racuna kao 0.
// 1. nacin
// const zbirKvadrata = (a, b) => {
//   if (b === undefined) {
//     return a ** 2;
//   } else {
//     return a ** 2 + b ** 2;
//   }
// };

// console.log(zbirKvadrata(3));

// 2. nacin
const zbirKvadrata = (a, b = 0) => {
  return a ** 2 + b ** 2;
};

console.log(zbirKvadrata(3));

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

const artm = (a = 1, b = 1, c = 1) => {
  return (a + b + c) / 3;
};
console.log(artm());

// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.

function povrsina(a, b) {
  if (a === b) {
    return "Povrsina kvadrata:" + a * b;
  } else {
    return "Povrsina pravugaonika:" + a * b;
  }
}
console.log(povrsina(2, 2));
console.log(povrsina(2, 3));

// Napraviti arrow funkciju koja na osnovu unete vrednosti vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "UNETA JE NULA"
// Ako nije unet broj, ispisuje poruku "UNETA VREDNOST NIJE BROJ"

const provera = (broj) => {
  if (typeof broj !== "number") {
    return "UNETA VREDNOST NIJE BROJ";
  } else if (broj > 0) {
    return "UNET JE POZITIVAN BROJ";
  } else if (broj < 0) {
    return "UNET JE NEGATIVAN BROJ";
  } else {
    return "UNETA JE NULA";
  }
};

console.log(provera(5));
console.log(provera(-3));
console.log(provera(0));
console.log(provera("abc"));

// Zadatak 2:
// Napiši funkciju koja prima broj i vraća true ako je broj paran, a false ako je neparan.

const funkcija = (broj1) => {
  if (broj1 % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
};

console.log(funkcija(6));
console.log(funkcija(1));

// Zadatak 3:
// Napiši funkciju koja prima dva broja i vraća veći od njih.
const vratiVeciBroj = (broj1, broj2) => {
  if (broj1 > broj2) {
    return broj1;
  } else if (broj1 < broj2) {
    return broj2;
  }
};

console.log(vratiVeciBroj(5, 10));
console.log(vratiVeciBroj(-3, 0));

// Zadatak 4:
// Napiši funkciju koja prima broj i vraća sumu svih brojeva do tog broja (uključujući taj broj). Na primer, za broj 4, funkcija treba vratiti 1 + 2 + 3 + 4 = 10.

const sumaBrojeva = (broj) => {
  let suma = 0;

  for (let i = 1; i <= broj; i++) {
    suma += i;
  }

  return suma;
};

console.log(sumaBrojeva(4));
console.log(sumaBrojeva(7));
console.log(sumaBrojeva(0));
