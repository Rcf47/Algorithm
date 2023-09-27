import { beforeAll, describe, expect, test } from "bun:test";
import { twoPointer } from "../algorithmTraning/twoPointer";

describe("Two pointer", () => {
  let case1;
  beforeAll(() => {
    case1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  });
  test("check simple case", () => {
    expect(twoPointer(case1, 10)).toEqual([
      [2, 8],
      [3, 7],
      [4, 6],
    ]);
  });
});
