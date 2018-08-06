/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let min;
  for (let num of nums) {
    if (min === undefined) {
      min = num;
    } else {
      if (num < min) return num;
    }
  }
  return min;
};

console.log(findMin([0,1,2,3,4,5,6]));