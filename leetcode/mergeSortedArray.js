/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = (nums1, m, nums2, n) => {
  let insert = m + n - 1;
  let lastNum1 = m - 1;
  let lastNum2 = n - 1;

  while (lastNum1 >= 0 && lastNum2 >= 0) {
    if (nums1[lastNum1] > nums2[lastNum2]) {
      nums1[insert--] = nums1[lastNum1--];
    } else {
      nums1[insert--] = nums2[lastNum2--];
    }
  }
  while (lastNum2 >= 0) {
    nums1[insert--] = nums2[lastNum2--];
  }
};


console.log(merge([2, 3, 5, 0, 0, 0], 3, [1, 5, 6], 3));



