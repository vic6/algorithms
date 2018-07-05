function factorial(num) {
  if (num === 1) return num;
  return num * factorial(num - 1);
}

function memoize(fn) {
  const cache = {};
  return function(num) {
    if(cache[num]) {
      return cache[num];
    } else {
      return fn(num);
    };
  };
}

const fact = memoize(
  function(num) {
    if(num == 1) return 1;
    return num * fact(num - 1);
  }
);

console.log(fact(3));



function memoFactorial() {
  const cache = {};
  return function recurse(num) {
    if (num ===1) return 1;
    if(cache[num]) {
      console.log('CACHED', num);
      return cache[num];
    } else {
      console.log('COMPUTED', num);
      let result = cache[num] = num * recurse(num - 1);
      return num * recurse(num - 1);
    };
  };
}

// console.log(factorial(7));
// const memoFact = memoFactorial();
// console.log(memoFact(10));
// console.log(memoFact);
