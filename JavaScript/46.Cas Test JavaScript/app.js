const array1 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];

function getObjects(array, value) {
  const arr = array1.reduce((acc, item) => {
    if (item["name"] === value) {
      acc.push(item);
    }
    return acc;
  }, []);
  return arr;
}

console.log(getObjects(array1, "Semir"));
// result: [ { id: '222312543', name: 'Semir', age: '32' } ]

console.log(getObjects(array1, "Suad"));
// result: [ ]
