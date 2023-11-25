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

// 1.2. number - predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza.
console.log(25);
console.log(typeof 25);

// 1.3. BigInt - Brojeve koji prelaze granice obicnih brojeva.

console.log(BigInt(20232030292302311231232124421));
console.log(typeof BigInt(20232030292302311231232124421));

// 1.4. Boolean - Logicki entitet koji ima dve vrednosti: true i false
console.log(true);
console.log(typeof true);

// 1.5. undefined - Promenljiva koja je definisana, ali joj nije dodeljena vrednost ima vrednost undefined i tip takodje undefined.

var a;

console.log(a);
console.log(typeof a);

// 1.6. null - Predstavlja nekonkretnu vrednost ili vrednost (za sada) ne postoji.

var a = null;

console.log(a);
console.log(typeof a);

// 1.7. Symbol - Tip podatka za skladistenje anonimnih i unikatnih vrednosti.

b = Symbol("Demir");
console.log(b);
console.log(typeof b);

// Primitivni tipovi podataka mogu skladistiti samo jednu vrednost.

// 2. Neprimitivni tipovi podataka (Referentni)

// Za skladistenje vise vrednosti ili kmpleksnih vrednosti se koriste neprimitvni tipovi podataka.
// Svaka promenljiva koja nije primitivnog tipa je tipa Object u JavaScript-u
// Objekti se koriste za skladistenje neke kolekcije podataka.

// 2.1. Array (Niz) - Predstavlja strukturu podataka za skladistenje vise vrednosti.
// Elementi niza ne moraju biti istog tipa.

niz = ["Demir", 18, true];
console.log(niz);
console.log(typeof niz);

// 2.2. Object (objekat) - predstavlja strukturu podataka za skladistenje vise vrednost. Objekti se zapisuju u key:value (name:valuse) praovima

obj = {
  ime: "Demir",
  brojGodina: 18,
  punoletan: true,
};
console.log(obj);
console.log(typeof niz);

// 2.3. Set - Predstavlja strukturu podataka za skladistenje vise vrednosti. Duplikati nisu dozvoljeni.

set = new Set(["Kanita", 19, true, "Kanita"]); // druga kanita se ne vidi
console.log(set);
console.log(typeof set);

// 2.4. Map -  Predstavlja strukturu podataka za skladistenje vise vrednosti. Slicni su objektima

map = new Map([
  ["ime", "Kanita"],
  ["brojGodina", 19],
  ["punoletnost", true],
]);

console.log(map);
console.log(typeof map);
