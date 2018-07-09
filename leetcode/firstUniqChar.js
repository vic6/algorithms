/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
  let stringMap = {};
  let uniqChars = [];

  for (let i = 0; i < s.length; i++) {
    stringMap[s[i]] = (stringMap[s[i]] || 0) + 1;
  }

  for (let key in stringMap) {
    if (stringMap[key] === 1) uniqChars.push(key);
  }

  for (let i = 0; i < s.length; i++) {
    if (uniqChars.includes(s[i])) return i;
  }
  return -1;
};

console.log(firstUniqChar('leetlovecode'));
