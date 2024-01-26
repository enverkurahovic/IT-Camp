// Racunanje realnih brojeva nije uvek tacno u JavaScript.
const x = 0.1;
const y = 0.2;
console.log(x + y);

console.log(5 + 5);
console.log(5 + "5");
console.log(5 / "5");
console.log(5 - "5");
console.log(5 - "5a");

// Infinity (-Infinity) je JavaScript vrednost koja je veca od najveceg broja u JS (koja je manja od najmanjeg broja), odnosno beskonacnost

console.log(5 / 0);
console.log(-5 / 0);

// Hexadecimalne brojeve mozemo u JavaScript se interpretiraju sa prefiksom 0x

const br = 0xff;
const br2 = 0xab;
console.log(br);
console.log(br2);

// const white = #ffffff
// const white (255, 255, 255,)

// Brojevi mozemo definisati i preko new keyword:

let z = new Number(0.3);
let w = 0.3;

console.log(z);

console.log(y + z);
console.log(z + w);
console.log(z === w);

const protectEmail = (email) => {
  const _Index = email.IndexOf("_");
  const dotIndex = email.IndexOf(".");
  const cutStartIndex = _Index === -1 ? dotIndex : _Index;
  const etIndex = email.IndexOf("@");
  let cut = email.slice(cutStartIndex, etIndex);
  newEmail = email.replace(cut, "...");
  return newEmail;
};

console.log(protectEmail("robin_singdas@gmail.com"));
console.log(protectEmail("lalal.lalalal@gmail.com"));
