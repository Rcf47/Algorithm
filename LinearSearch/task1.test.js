const findx = require("./task1.js")


describe('sequance: ', () => {
  let seq1
  let seq2
  let seq3
  let seq4
  let seq5
  let x;

  beforeAll(() => {
    seq1 = [1, 3, 2];
    seq2 = [2, 3, 1];
    seq3 = [2, 2, 2,];
    seq4 = [2]
    seq5 = []
    x = 2
  })
  test('sequance 1 2 3 equal 2 return index 1', () => {
    expect(findx([1, 2, 3], 2)).toBe(1);
  });

  test('sequance 1 3 2 equal 2 return index 2', () => {
    expect(findx(seq1, x)).toBe(2);
  });

  test('sequance 2 3 1 equal 2 return index 0', () => {
    expect(findx(seq2, x)).toBe(0);
  });

  test('sequance 2 2 2 equal 2 return index 0', () => {
    expect(findx(seq3, x)).toBe(0);
  });

  test('sequance  2 equal 2 return index 0', () => {
    expect(findx(seq4, x)).toBe(0);
  });

  test('sequance  equal 2 return index -1', () => {
    expect(findx(seq5, x)).toBe(-1);
  });

  test('1 3 2 equal 3 something return index 1', () => {
    expect(findx(seq1, 3)).toBe(1);
  });
})
