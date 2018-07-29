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

var twoSum = function(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (comp in hash) {
      return [hash[comp], i];
    }
    hash[nums[i]] = i;
  }
  return -1;
};

console.log(twoSum([2, 7, 11, 15], 9));
