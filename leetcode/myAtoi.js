/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  if (str.length === 0) return 0;
  str = str.trim();
  if (str.match(/^[0-9-+]/g)) {
    let result = parseInt(str);
    if (isNaN(result)) return 0;
    if (result > INT_MAX) {
      return INT_MAX;
    } else if (result < INT_MIN) {
      return INT_MIN;
    }
    return result;
  }
  return 0;
};

console.log(myAtoi('words and -91332'));
