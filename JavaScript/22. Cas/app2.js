function isPalidrom(string) {
  let reversdString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversdString += string[i];
  }
  if (string === reversdString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalidrom("anavolimilovana"));
