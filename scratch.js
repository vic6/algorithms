var uniqSort = function(arr) {
  const seen = {};
  const unique = arr.filter(num => {
    if (!seen[num]) {
      seen[num] = true;
      return num;
    }
  });
  return unique.sort((a, b) => a - b);
};

// console.log(uniqSort([3,2,5,23,1,3,5,3,3,2,53,2,1]));

const times10 = num => num * 10;

// const cache = {};
const memoTimes10 = num => {
  if (cache[num]) {
    console.log('cached');
    return cache[num];
  } else {
    console.log('calculated');
    cache[num] = times10(num);
    return cache[num];
  }
};

// console.log(memoTimes10(50));
// console.log(memoTimes10(50));

// const memoizedClosureTimes10 = (num) => {
//   const cache = {};
//
//   const memoTimes10 = (num) => {
//     if (cache[num]) {
//       console.log('cached');
//       return cache[num];
//     } else {
//       console.log('calculated');
//       cache[num] = times10(num);
//       return cache[num];
//     }
//   };
//
//   return memoTimes10;
// };
//
//
//
// const memoClosureTimes10 = memoizedClosureTimes10();
//
// console.log(memoClosureTimes10(10));
// console.log(memoClosureTimes10(10));

const memoizedClosureTimes10 = cb => {
  const cache = {};
  return (num) => {
    if (cache[num]) {
      console.log('cached');
      return cache[num];
    } else {
      console.log('calculated');
      cache[num] = cb(num);
      return cache[num];
    }
  };
};

const memoClosureTimes10 = memoizedClosureTimes10(times10);

console.log(memoClosureTimes10(10));
console.log(memoClosureTimes10(10));
