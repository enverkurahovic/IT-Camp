// arrays
// creating arrays, acessing data in arrays, matrix
// arrays and objects, iterating over arrays

// creating arrays
const niz = [];
const niz2 = [1, 2, 3, 4, 5];
const niz3 = [1, false, null, undefined, ""];
const niz4 = ["0", "1", "2", "3", "4", "5"];

// accessing data in array
console.log(niz2[1]);
console.log(niz2[niz2.length - 1]);

niz2.push("Ovo je string");
niz2.pop();

niz2.unshift("Ovo je pocetak");
niz2.shift();

niz2.splice(2, 1);
niz2.splice(2, niz2.length - 2);
console.log(niz2);

// iterating arrays
for (let i = 0; i < niz2.length; i++) {
  const element = niz2[i];
  console.log(element);
}

for (let i = 0; i < niz3.length; i++) {
  const element2 = niz3[i];
  console.log(element2);
}

// Vrati true ili false ako niz ima string kao elemenat
function isStringArray(niz) {
  for (let i = 0; i < niz2.length; i++) {
    const element = niz2[i];
  }

  if (typeof element === "string") {
    return true;
  }

  return false;
}

console.log(niz2);
console.log(isStringArray(niz3));

function isUndefinedArray(niz) {
  for (let i = 0; i < niz.length; i++) {
    const element = niz[i];

    if (typeof element === "undefined") {
      return true;
    }
  }
  return false;
}

console.log(isUndefinedArray(niz3));

// matrix
const multiNiz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(multiNiz[1][1]);
console.log(multiNiz[2][2], multiNiz[0][0]);

for (let i = 0; i < multiNiz.length; i++) {
  for (let j = 0; j < multiNiz[i].length; j++) {
    console.log(multiNiz[i][i]);
  }
}

function isStringInMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (typeof matrix[i][i] === "string");
      {
        return true;
      }
    }
  }
  return false;
}

console.log(isStringInMatrix(multiNiz));

const users = [
  { name: "Suad", surname: "Suljevic" },
  { name: "Kerim", surname: "Kerimovic" },
  { name: "Saladin", surname: "Hodzic" },
];

console.log(users[0].name);

console.log(users[2].surname);

function findInArray(niz, property, valueOfProperty) {
  for (let i = 0; i < niz.length; i++) {
    if (
      niz[i].hasOwnProperty(property) &&
      niz[i][property] === valueOfProperty
    ) {
      return niz[i];
    }
  }
  return false;
}

console.log(findInArray(users, "surname", "Suljevic"));
