import { beforeAll, describe, expect, test } from "bun:test";
import { getValueFromBinarySearch } from "../algorithmTraning/binarySearch";

describe("Binary search relise", () => {
  let numberArr;
  let numberArrShort;
  beforeAll(() => {
    numberArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 23, 34];
    numberArrShort = [2, 3, 4, 6];
  });
  test("test witn numbers", () => {
    expect(getValueFromBinarySearch(numberArr, 22)).toBe(22);
  });
  test("test with short arr", () => {
    expect(getValueFromBinarySearch(numberArrShort, 6)).toBe(6);
  });
  test("failed test", () => {
    expect(getValueFromBinarySearch(numberArrShort, 5)).toBeUndefined();
  });
});
