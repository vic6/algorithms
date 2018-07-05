function loopToZero(n) {
  if (n < 0) return;
  console.log(n);
  return loopToZero(n - 1);
}

// loopToZero(10);

function exponent(base, expo) {
  let total = base;
  while (expo > 1) {
    total *= base;
    console.log(total);
    expo--;
  }
  return total;
}

function recurExpo(base, expo) {
  if (expo <= 1) return base;
  return base * recurExpo(base, expo - 1);
}

// console.log(exponent(5, 4));
console.log(recurExpo(5,4));
