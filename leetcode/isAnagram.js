/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 var isAnagram = function(s, t) {
  return s.split('').sort().join() === t.split('').sort().join();
 };

 console.log(isAnagram('da', 'ad'));

 // use one hash table and add and subtract from it, then interate over table, if any value is not 0 return false;