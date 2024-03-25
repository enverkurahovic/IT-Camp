// const mockData = [
//   {
//     name: "John",
//     surname: "Doe",
//     age: 25,
//     address: "123 Main St, Cityville",
//   },
//   {
//     name: "Alice",
//     surname: "Smith",
//     age: 30,
//     address: "456 Oak St, Townsville",
//   },
//   {
//     name: "Bob",
//     surname: "Johnson",
//     age: 22,
//     address: "789 Pine St, Villagetown",
//   },
//   {
//     name: "Eva",
//     surname: "Brown",
//     age: 28,
//     address: "101 Elm St, Hamletsville",
//   },
//   {
//     name: "Evaaaa",
//     surname: "Browneneee",
//     age: 28,
//     address: "101 Elm St, Hamletsville",
//   },
// ];

// // const pr1 = mockData.map((data) => data.name);
// // const pr2 = mockData.map((data) => data.surname);
// // const pr3 = mockData.map((data) => data.age);
// // const pr4 = mockData.map((data) => data.address);

// // console.log(pr1);
// // console.log(pr2);
// // console.log(pr3);
// // console.log(pr4);

// const pr5 = mockData.filter(
//   (data) => data.address === "101 Elm St, Hamletsville"
// );

// // const pr6 = mockData.filter((data) => data.age <= 30);

// // console.log(pr5);
// // console.log(pr6);

// const newArray = mockData.filter((value) => {
//   switch (value.name[0].toLowerCase()) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       return true;
//       break;
//     default:
//       return false;
//   }

//   //   switch (["a", "e", "i", "o", "u"].includes(value.name[0].toLowerCase())) {
//   //     case true:
//   //       return true;
//   //     default:
//   //       return false;
//   //   }
// });

// console.log(newArray);

// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = [];

// arr.forEach((element, index) => {
//   arr2.push({ element: element, index: index });
// });

// console.log(arr2);

// const mockData = [
//     {
//       name: "John",
//       surname: "Doe",
//       age: 25,
//       address: "123 Main St, Cityville",
//     },
//     {
//       name: "Alice",
//       surname: "Smith",
//       age: 30,
//       address: "456 Oak St, Townsville",
//     },
//     {
//       name: "Bob",
//       surname: "Johnson",
//       age: 22,
//       address: "789 Pine St, Villagetown",
//     },
//     {
//       name: "Eva",
//       surname: "Brown",
//       age: 28,
//       address: "101 Elm St, Hamletsville",
//     },
//     {
//       name: "Enver",
//       surname: "Kostic",
//       age: 45,
//       address: "45 Oak St, Townsville",
//     },
//   ];

// treba da dobijete imena u nizu svih korisnika koji su stariji od  24

//   const userArray = mockData.filter((item) => item.age > 24);

//   const userArray2 = userArray.map((item) => item.name);

//   const userArray3 = mockData
//     .filter((item) => item.age > 24)
//     .map((item) => item.name);

// console.log(userArray2);
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
    address: "45 Oak St, Townsville",
  },
];

// treba da dobijete imena u nizu svih korisnika koji su stariji od  24

const userArray = mockData.filter((item) => item.age > 24);

const userArray2 = userArray.map((item) => item.name);

const userArray3 = mockData
  .filter((item) => item.age > 24)
  .map((item) => item.name);

console.log(userArray3);

const userAddress = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result.push(value.address);
  }
  return result;
}, []);

console.log(userAddress);

function makeKebabCase(string) {
  const arr5 = string.split(" ");

  return arr5.join("-");
}

console.log(makeKebabCase("Hocu ovo da bude kebab case."));
