/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
  let result = digits;
  console.log(digits.length);
  for (let i = result.length - 1; i >= 0; i--) {
    console.log('hi');
    result[i]++;
    if (result[i] <= 9) return result;
    result[i] = 0;
  }
  return [1, ...result];
};

console.log(plusOne([9]));
