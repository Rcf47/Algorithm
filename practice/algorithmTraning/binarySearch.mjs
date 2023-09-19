export function binarySearch(arr, findValue) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === findValue) {
      return arr[middle];
    } else if (arr[middle] < findValue) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return undefined;
}

let someArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 23, 34];
console.log(binarySearch(someArr, 26));
