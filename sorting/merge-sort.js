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
  let mid = Math.floor(length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}

// console.log(mergeSort([3,6,23,3,298,4, 23, 43, 29, 93]));

merge2 = (left, right) => {
  let result = [];
  let lPointer = 0;
  let rPointer = 0;
  while (lPointer < left.length && rPointer < right.length) {
    if (left[lPointer] < right[rPointer]) {
      result.push(left.shift());
      // lPointer ++;
    } else {
      result.push(right.shift());
      // rPointer ++;
    }
  }
  console.log('RESULt', result, left, right);
  result = result = [...result, ...left, ...right];
  return result;
};

mergeSort2 = array => {
  if (array.length < 2) return array;
  let midPoint = Math.floor(array.length / 2);
  let leftSide = array.slice(0, midPoint);
  let rightSide = array.slice(midPoint);
  let leftSorted = mergeSort2(leftSide);
  let rightSorted = mergeSort2(rightSide);
  return merge2(leftSorted, rightSorted);
};

// console.log(mergeSort2([3,6,23,3,298,4, 23, 43, 29, 93]));

merge3 = (left, right) => {
  let lPointer = 0;
  let rPointer = 0;
  let result = [];

  while (left.length > lPointer && right.length > rPointer) {
    if (left[lPointer] < right[rPointer]) {
      result.push(left[lPointer]);
      lPointer++;
    } else {
      result.push(right[rPointer]);
      rPointer++;
    }
  }
  let remainder = [...left.slice(lPointer), ...right.slice(rPointer)];
  return [...result, ...remainder];
};

mergeSort3 = list => {
  if (list.length < 2) return list;
  let mid = Math.floor(list.length / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid);
  let leftSorted = mergeSort3(left);
  let rightSorted = mergeSort3(right);
  return merge3(leftSorted, rightSorted);
};

console.log(mergeSort3([3,6,23,3,298,4, 23, 43, 29, 93]));
