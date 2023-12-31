// Promenljive  definisane preko var keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju),kao i reinicijalizaciju (odnosno novo dodeljivanje vrednosti)

var x = 10;
console.log(x);

x = 14;
console.log(x);

var x = 15;
console.log(x);

// let i const keyword obezbedjuju Block Scope.

// Promenljive definisane preko let keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju), ako se radi o drugom prostoru dok reinicijalizaciju (odnosno novo dodeljivanje vrednosti) mozemo izvrsiti i u istom prostoru.

let y = 3;
console.log(y);

y = 6;
console.log(y);

// let y = 50; nije dozvoljeno redeklarisanje u istom prostoru
// console.log(y);

{
  //   console.log(y); y se prepoznaje iz global scope
  let y = 20;
  console.log(y);
}

console.log(y);

// Promenljive definisane preko const keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju), ako se radi o drugom prostoru.
// Reinicijalizacija nije dozvoljenja za promenljive definisane preko const.

const z = 30;

// const z = 40; nije dozvoljeno u istom prostoru

// z = 60 nije dozvoljeno rinicijalizacija u istom prostoru

{
  // console.log(z) z se prepoznaje iz global scope
  const z = 20;
  console.log(z);
}

console.log(z);
