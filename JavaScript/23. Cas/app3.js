const str = (string) => string.toLowerCase();
console.log(str("strign NAPISAN mALIM sLOVIMA"));

function lastIndex(string) {
  lastPosition = string.lastIndexOf(" ");
  if (lastPosition === -1) {
    return "Dati string nema razmaka";
  } else {
    return lastPosition;
  }
}

console.log(lastIndex("pera ima devojku"));
console.log(lastIndex("pera"));

const prvaRec = (str) => str.lastIndexOf(" ");
console.log(prvaRec("Danas smo bas"));

function ab(A) {
  let B = " ";
  const firstWord = A.slice(0, A.lastIndexOf(" "));
  const lastWord = A.slice(A.lastIndexOf(" "));
  B += `${firstWord}${lastWord}`;
  return B;
}

console.log(ab("Svuda podji, kuci dodji."));
