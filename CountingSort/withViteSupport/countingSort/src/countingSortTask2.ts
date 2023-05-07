export function isDigitPerMutation(x: number, y: number): boolean {

  function countDigit(num: number): number[] {
    let digitCount = new Array(10).fill(0)
    while (num > 0) {
      let lastdigit = num % 10
      digitCount[lastdigit] += 1
      num = Math.floor(num / 10)
    }
    return digitCount
  }
  let digitsx = countDigit(x)
  let digitsy = countDigit(y)
  for (let i = 0; i <= 9; i++) {
    if (digitsx[i] !== digitsy[i]) {
      return false
    }
  }
  return true

}
