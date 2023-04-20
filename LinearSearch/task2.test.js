
const findRightX = require("./task2.js")

const seq = [1, 2, 3];
const seq1 = [1, 3, 2];
const seq2 = [2, 3, 1];
const seq3 = [2, 2, 2];
const seq4 = [2];
const seq5 = [];
const x = 2;
test("find last char in sequence 1, 2, 3 equal index 1", () => {
  expect(findRightX(seq, x)).toBe(1)
})
