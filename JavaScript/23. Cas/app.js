// Domaci

function zamenaReci(recenica, rec) {
  return recenica.replace(rec, "#");
}

console.log(
  zamenaReci("Danas je lep dan. Juce je takodje bio lep dan", /lep/g)
);

function duzinaBezRazmaka(recenica) {
  const recenicaBezRazmaka = recenica.replace(/ /g, "");
  return recenicaBezRazmaka.length;
}

console.log(duzinaBezRazmaka("Nema nam Demira."));
