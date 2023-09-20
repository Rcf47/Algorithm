export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([4, 2, 5, 6, 2, 1, 3, 9, 1, 4]));
