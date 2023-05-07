import { isDigitPerMutation } from '../src/countingSortTask2.js'

describe('Check numbers', () => {
  test('should return true for two numbers with same digits', () => {
    expect(isDigitPerMutation(123, 321)).toBe(true)
    expect(isDigitPerMutation(4567, 6745)).toBe(true)
  })

  test('should return false', () => {
    expect(isDigitPerMutation(123, 221)).toBe(false)
    expect(isDigitPerMutation(4567, 4568)).toBe(false)
  })
})
