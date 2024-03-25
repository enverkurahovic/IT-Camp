// toString()
// join()
// concat()
// splice()
// slice()
// indexOf()
// lastIndexOf()
// forEach()
// map()
// filter()
// reduce()
// some()
// every()
// flat()
// find()
// findIndex()
// sort()

// let names = ["Ammar", "Zmaj", "Adnan"];
// let names2 = ["Izet", "Zmaj", "Omer"];

// const pr1 = names.toString();
// const pr2 = names.join(" and ");
// const pr3 = names.concat(names2);
// const pr4 = names.splice(1, 2);

// console.log(pr1);
// console.log(pr2);
// console.log(pr3);
// console.log(pr4);
// console.log(names);

// let studenti = [
//   { ime: "Ana", ocjene: [85, 90, 88] },
//   { ime: "Marko", ocjene: [92, 88, 94] },
//   { ime: "Ivana", ocjene: [78, 85, 80] },
// ];

// studenti.forEach((student) => {
//   let sum = student.ocjene.reduce((acc, curr) => acc + curr, 0);
//   let prosjek = sum / student.ocjene.length;
//   console.log(`${student.ime} ima prosječnu ocjenu od ${prosjek.toFixed(2)}.`);
// });

// let proizvodi = [
//   { ime: "Laptop", cijena: 1200, naStanju: true },
//   { ime: "Smartphone", cijena: 800, naStanju: false },
//   { ime: "Televizor", cijena: 1500, naStanju: true },
//   { ime: "Slušalice", cijena: 100, naStanju: true },
//   { ime: "Miš", cijena: 30, naStanju: false },
// ];

// // Filtriranje dostupnih proizvoda i sortiranje prema cijeni
// let dostupniProizvodi = proizvodi
//   .filter((proizvod) => proizvod.naStanju)
//   .sort((a, b) => a.cijena - b.cijena);

// console.log(dostupniProizvodi);

// let knjige = [
//   { naslov: "1984", autor: "George Orwell", godinaIzdanja: 1949 },
//   {
//     naslov: "Harry Potter and the Philosopher's Stone",
//     autor: "J.K. Rowling",
//     godinaIzdanja: 1997,
//   },
//   { naslov: "To Kill a Mockingbird", autor: "Harper Lee", godinaIzdanja: 2007 },
//   { naslov: "Pride and Prejudice", autor: "Jane Austen", godinaIzdanja: 2001 },
//   {
//     naslov: "The Catcher in the Rye",
//     autor: "J.D. Salinger",
//     godinaIzdanja: 1951,
//   },
// ];

// let objavljeneP2000 = knjige
//   .filter((knjige) => knjige.godinaIzdanja < 2000)
//   .sort((a, b) => a.godinaIzdanja - b.godinaIzdanja);

// console.log(objavljeneP2000);

// Neka imate array objekata koji predstavljaju različite proizvode. Svaki proizvod ima svojstva 'ime' (string) i 'kategorija' (string). Vaš zadatak je grupirati sve proizvode prema njihovoj kategoriji.

// let proizvodi = [
//   { ime: "Laptop", kategorija: "Elektronika" },
//   { ime: "Knjiga", kategorija: "Edukacija" },
//   { ime: "Telefon", kategorija: "Elektronika" },
//   { ime: "Bicikl", kategorija: "Sport" },
//   { ime: "Kućni uređaj", kategorija: "Elektronika" },
//   { ime: "Bilježnica", kategorija: "Edukacija" },
// ];

// let grupiraniProizvodi = proizvodi.reduce((acc, proizvod) => {
//   if (!acc[proizvod.kategorija]) {
//     acc[proizvod.kategorija] = [];
//   }
//   acc[proizvod.kategorija].push(proizvod);
//   return acc;
// }, {});

// console.log(grupiraniProizvodi);

//

// Vaš zadatak je izračunati ukupnu vrijednost košarice.

// let kosarica = [
//   { ime: "Mlijeko", cijena: 2.5 },
//   { ime: "Jaja", cijena: 3 },
//   { ime: "Kruh", cijena: 1.8 },
//   { ime: "Jogurt", cijena: 1.2 },
// ];

// let ukupnaVrijednost = kosarica.reduce(
//   (ukupno, stavka) => ukupno + stavka.cijena,
//   0
// );

// console.log(ukupnaVrijednost);

//

// let array1 = [
//   { ime: "Proizvod A", cijena: 10 },
//   { ime: "Proizvod B", cijena: 20 },
//   { ime: "Proizvod C", cijena: 15 },
// ];

// let array2 = [
//   { ime: "Proizvod B", cijena: 20 },
//   { ime: "Proizvod D", cijena: 25 },
//   { ime: "Proizvod E", cijena: 18 },
// ];

// // Kombiniranje dva arraya i eliminacija duplikata
// let kombiniraniArray = [...array1, ...array2];

// // Eliminacija duplikata
// let jedinstveniArray = kombiniraniArray.filter(
//   (item, index) =>
//     kombiniraniArray.findIndex(
//       (obj) => obj.ime === item.ime && obj.cijena === item.cijena
//     ) === index
// );

// console.log(jedinstveniArray);

//

// Potrebno je filtrirati sve ocjene iz određenog predmeta i izračunati prosječnu ocjenu za taj predmet.

// let nzm = [
//   { predmet: "Matematika", ocjene: [85, 90, 88] },
//   { predmet: "Fizika", ocjene: [75, 80, 82] },
//   { predmet: "Matematika", ocjene: [90, 92, 88] },
//   { predmet: "Biologija", ocjene: [70, 75, 72] },
// ];

// const krjanjiRezultat = nzm.filter((ocena) => {
//   let sum = ocena.ocjene.reduce((acc, curr) => acc + curr, 0);
//   let prosjek = sum / ocena.ocjene.length;
//   console.log(`Prosječna ocjena  je ${prosjek.toFixed(2)}.`);
// });

// studenti.forEach((student) => {
//   let sum = student.ocjene.reduce((acc, curr) => acc + curr, 0);
//   let prosjek = sum / student.ocjene.length;
//   console.log(`${student.ime} ima prosječnu ocjenu od ${prosjek.toFixed(2)}.`);
// });

// let niz = [5, 12, 8, 15, 9, 20, 3];

// const filtriraniBrojevi = niz.filter((broj) => broj > 10);
// console.log("Filtrirani brojevi:", filtriraniBrojevi);

// const najveci = Math.max(...filtriraniBrojevi);
// console.log("Najveći broj:", najveci);

// fetching and DOM manipulation practice

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

fetchQuote().then((data) => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `<div class="card">
    <p class="author">Author: <span id="authorText">${data.author}</span></p>
    <p class="content" id="contentText">${data.content}</p>
  </div>`;
});

// imate div sa id content2. U njega treba da prikazete sve citate
// koje dobijete sa apija: https://api.quotable.io/quotes?page=1
const fetchQuotes = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes?page=1");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes().then((data) => {
  const contentDiv = document.getElementById("content2");
  //   let quotes = "";

  //   data.forEach((quote) => {
  //     quotes += `<div class="card">
  //     <p class="author">Author: <span id="authorText">${quote.author}</span></p>
  //     <p class="content" id="contentText">${quote.content}</p>
  //   </div>`;
  //   });

  //   contentDiv.innerHTML = quotes;

  const quotes = data
    .map((quote) => {
      return `<div class="card">
              <p class="author">Author: <span id="authorText">${quote.author}</span></p>
              <p class="content" id="contentText">${quote.content}</p>
             </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
});

// napravicete content div 3; gde ce te prikazati sve quotove sa sledeceg
// api poziva: https://api.quotable.io/search/quotes?query=technology

const fetchQuotes3 = async () => {
  try {
    const input = document.getElementById("search");
    const response = await fetch(
      `https://api.quotable.io/search/quotes?query=${input.value}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const showQuotes = (data) => {
  const contentDiv = document.getElementById("content3");

  const quotes = data
    .map((quote) => {
      return `<div class="card">
                <p class="author">Author: <span id="authorText">${quote.author}</span></p>
                <p class="content" id="contentText">${quote.content}</p>
               </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
};

const searchButton = document.getElementById("searchClick");

searchButton.addEventListener("click", () => {
  fetchQuotes3().then(showQuotes);
});
