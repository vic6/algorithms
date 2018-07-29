/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length === 0) return -1;
  if (haystack.length < needle.length - needle.length - 1) return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle.length === 1) return i;
      let matches = true;
      for (let j = 1; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) matches = false;
      }
      if (matches) return i;
    }
  }
  return -1;
};


var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length === 0 || haystack.length < needle.length) return -1;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
    let sub = haystack.slice(i, (needle.length + i));
    if (sub === needle) return i;
    }
  }
  return -1;
};

console.log(strStr('hello', 'l'));