// async await es6
// try catch, http,

// async
const asyncFN = async () => {
  const rand = Math.random();
  if (rand > 0.5) {
    console.log("we are in resolve");
    return "resolve";
  } else {
    console.log("we are in reject");
    throw new Error("This is error text");
  }
};

asyncFN()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

const fetchUser = async () => {
  try {
    const result = await fetch("https://randomuser.me/api/");
    const data = await result.json();
    // throw new Error("this was that message");
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
fetchUser();

// http
// internet iso model, tcp and udp

// http methods
// GET,POST,PUT,DELETE

// Get se korisiti za uzimanje podataka, nema body, podatke saljete u urlu
// POST se korsiti za slanje podataka, ima body, podatke saljete u bodiju
// PUT se korsiti za slanje podataka, ima body, podatke saljete u bodiju
// DELETE se korsiti za brisanje podataka

// http status codes
// 100 informacioni kodovi
// 200 success kodovi
// 300 redirect kodovi
// 400 client errors
// 500 server error
