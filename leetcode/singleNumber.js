/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
  let numHash = {};
  for (let number of nums) {
    numHash[number] = (numHash[number] || 0) + 1;
  }
  for (let key in numHash) {
    if (numHash[key] === 1) return (parseInt(key));
  }
};

// other solution w/out extra space
// const singleNumber = nums => nums.reduce((acc, num) => acc ^ num, 0);


console.log(singleNumber([1, 2, 3, 1, 2]));
