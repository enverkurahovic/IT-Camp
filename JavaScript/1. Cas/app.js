naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko JavaScript-a";
naslov.style = "color: red; font-size: 42px";

// TIPOVI PODATAKA//

// Da bismo znali tip promenljive u JavaScript koristimo typeof operator.

// Tipovi podataka u JavaScript delimo u dve grupe:
// 1. Primitivni tipovi podataka (Vrednosni)
// 2. Neprimitivni tipovi podataka (Referentni)

// 1.1. stringovi - Niz karaktera koji je zapisan pod navodnicima. Obican ili duplim.
console.log("Ovo je nas prvi String.");
console.log(typeof "Ovo je nas prvi String.");

// 1.2 number - predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza.
console.log(25);
console.log(typeof 25);

// 1.3 BigInt - Brojeve koji prelaze granice obicnih brojeva.

console.log(BigInt(20232030292302311231232124421));
console.log(typeof BigInt(20232030292302311231232124421));
