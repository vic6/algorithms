/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = nums[0];
  let oldMax = -Infinity;
  let maxIndex;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      oldMax = max;
      max = nums[i];
      maxIndex = i;
    } else if (nums[i] > oldMax) {
      oldMax = nums[i];
    }
  }
  return max >= nextToMax * 2 ? maxIndex : -1;
};

let x = [4, 2, 6, 8, 21, 34, 18, 2, 12, 3, 5, 23, 21];
