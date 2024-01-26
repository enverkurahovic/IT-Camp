function index(recenica) {
  const dveReci = "ko osvaja";

  const brojPojavljivanja = recenica.includes(dveReci)
    ? recenica.match(/ko osvaja/g).length
    : 0;
  console.log(brojPojavljivanja);
  if (!recenica.includes(dveReci)) {
    return "Nismo pronasli dati string.";
  } else if (brojPojavljivanja > 1) {
    return `Pozicija prvog pojavljivanja je ${recenica.indexOf(
      dveReci
    )}\n Pozicija poslednjeg pojavljivanja ${recenica.lastIndexOf(dveReci)}`;
  } else {
    return `Pozicija pojavljivanja je ${recenica.indexOf(dveReci)}`;
  }
}

console.log(index("Ko osvaja ligu sampiona ove godine"));
console.log(index("Amir se vratio."));
console.log(
  index(
    "Ko osvaja ligu sampiona ove godine? ko osvaja premier ligu ove godine?"
  )
);
