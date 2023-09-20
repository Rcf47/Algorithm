import { beforeAll, describe, expect, test } from "bun:test";
import { executeBubbleSort } from "../algorithmTraning/bubbleSort";

describe("Bubble sort", () => {
  let shortArr;
  let secondShortArr;
  beforeAll(() => {
    shortArr = [4, 2, 5, 6, 2, 1, 3, 9, 1, 4];
    secondShortArr = [8, 7, 6, 5, 4, 3, 2, 1];
  });
  test("test short arr", () => {
    expect(executeBubbleSort(shortArr)).toEqual([1, 1, 2, 2, 3, 4, 4, 5, 6, 9]);
  });
  test("test second short arr", () => {
    expect(executeBubbleSort(secondShortArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
