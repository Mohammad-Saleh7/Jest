const sum = require("./1-sum");

describe("describe", () => {
  test("Should return sum of 2+3", () => {
    expect(sum(2, 3)).toBe(5);
  });

  //ERROR CODE:
  test("throws error when input is not a number", () => {
    expect(sum(5, "a")).toThrow("Input must be number");
    expect(sum(10, "ten")).toThrow(TypeError);
  });
});
