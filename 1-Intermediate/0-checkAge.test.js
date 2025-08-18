const checkAge = require("./0-checkAge");

describe("describe", () => {
  test("Should return not undefined for age>18", () => {
    expect(checkAge(42)).not.toBeUndefined();
  });
  test("Should return undefined for age<18", () => {
    expect(checkAge(17)).toBeUndefined();
  });
});
