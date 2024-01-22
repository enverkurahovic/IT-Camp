function zamena(A, B) {
  const C = "";
  // let duziString;
  // if (A.length > B.length) {
  //     duziString = A.length
  // } else {
  //     duziString = B.length
  // }
  const duziString = A.length > B.length ? A.length : B.length;
  for (let i = 0; i < duziString.length; i++) {
    if (A[i] === undefined) {
      C += B[i];
    } else if (B[i] === undefined) {
      C += A[i];
    } else {
      C += A[i] + B[i];
    }
  }
  return C;
}

console.log(zamena("PERA", "sladoled"));
