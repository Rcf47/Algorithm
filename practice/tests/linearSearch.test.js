import { beforeAll, describe, expect, test } from "bun:test";
import { getValue } from "../algorithmTraning/linearSearch";

describe("Linear search", () => {
  let numberArr;
  let stringArr;
  let strAndNumberArr;
  beforeAll(() => {
    numberArr = [0, 3, 4, 6, 3, 2, 5, 5, 8];
    stringArr = ["Hello", "Vadim", "how are you"];
    strAndNumberArr = numberArr.concat(stringArr);
  });
  test("test first array", () => {
    expect(getValue(numberArr, 8)).toBe(8);
  });
  test("test string array", () => {
    expect(getValue(stringArr, "Vadim")).toBe("Vadim");
  });
  test("test string and number arr with number value", () => {
    expect(getValue(strAndNumberArr, 5)).toBe(5);
  });
  test("test string and number arr with string value", () => {
    expect(getValue(strAndNumberArr, "Hello")).toBe("Hello");
  });
});
