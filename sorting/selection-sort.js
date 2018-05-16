function swap(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) swap(arr, j, i);
    }
  }
  return arr;
}

let numbers = [4, 6, 2, 5, 29, 2, 1, 12];

console.log(selectionSort(numbers));
