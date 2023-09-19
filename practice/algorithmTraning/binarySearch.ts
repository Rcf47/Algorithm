export function getValueFromBinarySearch(
  arr: number[],
  findValue: number,
): number | undefined {
  let result: number | undefined;
  let currentArr = [...arr];
  let middleIndex: number;
  let currentValue: number;
  do {
    middleIndex = Math.floor(currentArr.length / 2);
    currentValue = currentArr[middleIndex];
    if (currentValue === findValue) {
      result = currentValue;
      break;
    } else if (currentValue < findValue) {
      currentArr = currentArr.splice(middleIndex + 1, currentArr.length - 1);
    }
    if (currentValue > findValue) {
      currentArr = currentArr.splice(0, middleIndex - 1);
    }
  } while (currentArr.length >= 1);

  return result;
}

let shortArr = [2, 4, 6, 8, 10];
console.log(getValueFromBinarySearch(shortArr, 8));
