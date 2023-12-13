const demir = "Demir";

for (let i = 0; i < 10; i++) {
  console.log(demir);
}

// 1. Nacin
for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword koristimo kada zelimo da preskocimo radnju za tu iteraciju i nastavimo petlju sa naredbom iteracija.

// 2. Nacin
for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// break izvrsava prekidanje petlje. Ako zelimo da se u nekom momentu prestane izvrsavati onda koristimo break.
for (let i = 1; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}
