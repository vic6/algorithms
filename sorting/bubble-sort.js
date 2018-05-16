function swap(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}
-
console.log(swap([3,49], 0, 1));

function bubbleSort(arr) {
  let wall = arr.length;
  while (wall >= 0) {
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    wall--;
  }
  return arr;
}

console.log(bubbleSort([3,6,1,9,45,2]));
