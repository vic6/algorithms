/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  var lettersNumbers = /[A-Za-z0-9]/g;
  s = s.toLowerCase().match(lettersNumbers);
  if (!s) return true;
  let alphNum = s.slice(0);

  for (let i = 0; i < alphNum.length - 1; i++) {
    let leftVal = alphNum[i];
    let rightVal = alphNum[alphNum.length - 1 - i];
    if (leftVal !== rightVal) return false;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));