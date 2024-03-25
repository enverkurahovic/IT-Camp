const uredjaji = [
  {
    naziv: "Laptop",
    cena: 1500,
    count: 5,
  },
  {
    naziv: "Pametni telefon",
    cena: 800,
    count: 5,
  },
  {
    naziv: "Televizor",
    cena: 1200,
    count: 3,
  },
  {
    naziv: "Prijenosni zvučnik",
    cena: 100,
    count: 3,
  },
  {
    naziv: "Pametni sat",
    cena: 300,
    count: 2,
  },
];

const lapPronalazac = uredjaji.filter(callback);

function callback(item) {
  if (item.naziv === "Laptop") {
    return item.naziv;
  }
}

console.log(lapPronalazac);

// const totalPrice = uredjaji.reduce(
//   (acc, item) => acc + item.cena * item.count,
//   0
// );

// console.log(totalPrice);
