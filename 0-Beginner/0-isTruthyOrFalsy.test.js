const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");

describe("describe", () => {
  test("should return true for truthy value: true", () => {
    expect(isTruthyOrFalsy(true)).toBeTruthy();
  });
  test('should return true for truthy value: "hello"', () => {
    expect(isTruthyOrFalsy("hello")).toBeTruthy();
  });
  test("should return true for truthy value: 10", () => {
    expect(isTruthyOrFalsy(10)).toBeTruthy();
  });

  test("should return false for falsy value: false", () => {
    expect(isTruthyOrFalsy(false)).toBeFalsy();
  });

  test('should return false for falsy value: "" (empty string)', () => {
    expect(isTruthyOrFalsy("")).toBeFalsy();
  });

  test("should return false for falsy value: 0", () => {
    expect(isTruthyOrFalsy(0)).toBeFalsy();
  });

  test("should return false for falsy value: null", () => {
    expect(isTruthyOrFalsy(null)).toBeFalsy();
  });
  test("should return false for falsy value: undefined", () => {
    expect(isTruthyOrFalsy(undefined)).toBeFalsy();
  });
});
