function times10(num) {
  return num * 10;
}

let globalCache = {};

function memoTimes10(num) {
  if (globalCache[num]) {
    console.log('CACHED');
    return globalCache[num];
  } else {
    const result = times10(num);
    globalCache[num] = result;
    return result;
  }
}

function memoizedClosureTimes10(cb) {
  const cache = {};
  return function checkCache(num) {
    if (cache[num]) {
      return cache[num];
    } else {
      result = cb(num);
      cache[num] = result;
      return result;
    }
  };
}

// console.log(times10(15));
// console.log(memoTimes10(5));
// console.log(memoTimes10(5));

let memClose = memoizedClosureTimes10(times10);
console.log(memClose(3));
