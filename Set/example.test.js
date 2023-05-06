const findSum = require('./example.js')

describe('Test set function', () => {
  test('[1, 5, 6, 7, 3]', () => {
    expect(findSum(5, 10, [1, 5, 6, 7, 3])).toBe(3)
  })
})
