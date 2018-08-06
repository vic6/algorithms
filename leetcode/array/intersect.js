/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = {};
  let result = [];
  for (let num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }
  return result;
};

console.log(intersect([1,2,2,1], [2,2]));

