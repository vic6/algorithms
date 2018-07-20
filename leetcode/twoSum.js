/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2)
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target - nums[i] === nums[j]) {
        return [i, j];
      }
    }
  }
  return -1;
};
