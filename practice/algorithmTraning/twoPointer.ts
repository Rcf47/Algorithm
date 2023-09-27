export function twoPointer(
  arr: number[],
  targetNum: number,
): number[] | number[][] {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let sum = 0;
  let result = [];

  while (leftPointer < rightPointer) {
    sum = arr[leftPointer] + arr[rightPointer];
    if (sum === targetNum) {
      result.push([arr[leftPointer], arr[rightPointer]]);
      leftPointer++;
    } else if (sum < targetNum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return result;
}
