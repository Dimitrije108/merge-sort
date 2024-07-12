#!/usr/bin/env node

function merge(arr1, arr2) {
  let sorted = [];

  while (arr1[0] >= 0 && arr2[0] >= 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1[0]);
      arr1.splice(0, 1);
    } else {
      sorted.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }

  if (arr1.length > 0) {
    sorted = sorted.concat(arr1);
  }

  if (arr2.length > 0) {
    sorted = sorted.concat(arr2);
  }

  return sorted;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
  }
}

array1 = [3, 2, 1, 13, 8, 5, 0, 1]; // [0, 1, 1, 2, 3, 5, 8, 13]
array2 = [105, 79, 100, 110]; // [79, 100, 105, 110]

console.log(mergeSort(array1), mergeSort(array2));
