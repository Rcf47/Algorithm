export function executeBubbleSort(arr: number[]): number[] {
  let cloneArr = [...arr];
  let len = cloneArr.length;
  for (let i = 0; i < cloneArr.length; i++) {
    for (let j = 0; j < len; j++) {
      if (cloneArr[j] > cloneArr[j + 1] && cloneArr[j + 1]) {
        [cloneArr[j], cloneArr[j + 1]] = [cloneArr[j + 1], cloneArr[j]];
      }
    }
    len--;
  }
  return cloneArr;
}
