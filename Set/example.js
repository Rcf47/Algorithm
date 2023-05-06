//Последовательность чисел длиной N  и число X нужно найти два различных числа A и B из последовательности, таких, что A+B=X

const readline = require('readline')

function findSum(n, x, arr) {
  const setNumbers = new Set(arr)
  for (let item of arr) {
    if (setNumbers.has(x - item)) {
      console.log(x - item)
    }
  }
}

if (require === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.on('line', line => {
    let [numberLength, numberX] = line.split(" ").map(Number)
    findSum(numberLength, numberX)
  })
} else {
  module.exports = { findSum }
}
