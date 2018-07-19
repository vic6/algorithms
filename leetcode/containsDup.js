/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {};
    for (let num of nums) {
      if (hash[num]) {
        return true;
      } else {
        hash[num] = 1;
      }
    }
    return false;
};

containsDuplicate([1,2,3,1]);
