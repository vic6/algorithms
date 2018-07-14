/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  let result = [];
  let testWord = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (testWord[j] === strs[i][j]) {
        console.log(strs[i][j]);
        continue;
      } else {
        if (j === 0) testWord = '';
        testWord = testWord.slice(0, j);
      }
    }
  }
  return testWord;
};

console.log(longestCommonPrefix(["aa", 'a', "aa","a"]));