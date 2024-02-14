// es6 + array methods
// reduce, forEach

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [];
arr.forEach((element, index) => {
  arr2.push({ element: element, index: index });
});

console.log(arr2);

// koristeci forEach clg sve elemente niza arr

arr.forEach((value) => {
  console.log(value);
});

console.log(arr);

// koristeci forEach izbrisati sve elemente niza arr

// arr.forEach((element, index, array) => {
//   console.log(element, index, array);
//   arr.splice(0);
// });

// console.log(arr);

// reduce

const sum = arr.reduce((result, value, index, array) => {
  console.log(result, value);
  return result + value;
}, 0);

// da pretvriti sve elemente niza arr u objekat sa key-om indexom tog elementa

const nzm = arr.reduce((result, value, index) => {
  console.log(result, value);
  let key = "";
  if (index === 0) {
    key = "nula";
  } else if (index === 1) {
    key = "jedan";
  }
  result[index] = value;
  return result;
}, {});

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
  {
    name: "Enver",
    surname: "Kostic",
    age: 45,
    address: "456 Oak St, Townsville",
  },
];

// treba dobiti imena svih korisnika koji su stariju od 24

// const useArray = mockData
//   .filter((item) => item.age > 24)
//   .map((item) => item.name);

// console.log(useArray);

const useArray2 = mockData.reduce((result, value) => {
  if (value.age > 24) {
    result.push(value.name);
  }
  return result;
}, []);

console.log(useArray2);

// dobiti adresu korisnika koji je iz Townsville

const userAddres = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) result = value.address;
  return result;
}, "");

console.log(userAddres);

// naci imena svih korisnika  Townsville

const user = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result.push(value.address);
  }
  return result;
}, []);

console.log(user);
