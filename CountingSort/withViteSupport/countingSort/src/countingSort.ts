export function countingSort(arr: number[]): number[] {
  let answer: number[] = []
  let minValue: number = Math.min(...arr)
  let maxValue: number = Math.max(...arr)
  let k: number = maxValue - minValue + 1
  let arrayCount: number[] = new Array().fill(0, 0, k)
  let j = 0

  for (let now of arr) {
    arrayCount[now - minValue] += 1
  }
  for (let i = minValue; i <= maxValue; i++) {
    while (arrayCount[i] > 0) {
      answer[j] = i
      j++
      arrayCount[i]--
    }
  }
  return answer
}

let arr = [0, 3, 5, 2, 4, 5, 2, 3]
console.log(countingSort(arr))
