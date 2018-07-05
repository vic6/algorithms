binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;

  while(min <= max) {
    let guess = Math.floor((max + min) / 2);
    if (array[guess] === target) {
      return guess;
    } else {
      if (array[guess] < target) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return -1;
};
