
let test = [1,5,10,11,15];

function missingNums(array) {
  let nums = [];
  
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + 1 !== array[i + 1]) {
      nums.push(array[i] + 1);
      nums.push(array[i + 1] - 1);
    }
  }
  return nums;
}

console.log(missingNums(test));