/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeX = function(nums1, m, nums2, n) {
  nums1 = nums1.splice(0, m);
  console.log(nums1);
  let result = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] <= nums2[0]) {
      result.push(nums1.shift());
    } else {
      result.push(nums2.shift());
    }
  }
  result = [...result, ...nums1, ...nums2];
  return result;
};

var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length - 1; i++) {
    if (nums2[0] <= nums1[i]) {
      // nums1.splice(i, 0, nums2.shift());
      shiftArray(nums1, nums2.shift(), i);
    }
  }
  console.log(nums1);
};

function shiftArray(array, newVal, n) {
  let prevVal = array[n];
  array[n] = newVal;
  array[n + 1] = prevVal;
  console.log(array);
}

// shiftArray([1, 2, 3, 0, 0], 4, 3);

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
