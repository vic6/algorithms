function merge(l, r) {
  let lPointer = 0;
  let rPointer = 0;
  let result = [];
  while (l.length > lPointer && r.length > rPointer) {
    if (l[lPointer] < r[rPointer]) {
      result.push(l[lPointer]);
      lPointer++;
    } else {
      result.push(r[rPointer]);
      rPointer++;
    }
  }
  let remainder = [...l.slice(lPointer), ...r.slice(rPointer)];
  return [...result, ...remainder];
}

// console.log(merge([8,45,900], [1,3,5,7]));

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let mid = Math.floor(length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}

console.log(mergeSort([3,6,23,3,298,4, 23, 43, 29, 93]));
