import { beforeAll, describe, expect, test } from "bun:test";
import { mergeSort } from "../algorithmTraning/mergeSort";

describe("Merge sort", () => {
  let shortArr;
  beforeAll(() => {
    shortArr = [4, 2, 5, 6, 2, 1, 3, 9, 1, 4];
  });
  test("test shortArray", () => {
    expect(mergeSort(shortArr)).toEqual([1, 1, 2, 2, 3, 4, 4, 5, 6, 9]);
  });
});
