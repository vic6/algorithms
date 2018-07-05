function sherlockAndAnagrams(s) {
  let hash = {};
  let result = 0;
  for(let i = 0; i < s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      let slice = s.slice(i,j).split('').sort().join('');
      console.log(slice);
      if(!hash[slice]) {
        hash[slice] = 1;
      } else {
        hash[slice] += 1;
      }
    }
  }
  for (let item in hash) {
    if (hash[item] === 2) {
      result += 1;
    } else if (hash[item] > 2) {
      result += hash[item];
    }
  }
  console.log(hash);
  return result;
}

console.log(sherlockAndAnagrams('pvmupwjjjf'));
