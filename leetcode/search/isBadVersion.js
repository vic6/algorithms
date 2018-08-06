/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let min = 0;
    let max = n;
    let count = 0;
    while (min + 1 !== max) {
      count ++;
      if (count > 50) break;
      let guess = Math.floor((min + max) /2);
      if (isBadVersion(guess)) {
        max = guess;
      } else {
        min = guess;
      }
    }
    return max;
  };
};
