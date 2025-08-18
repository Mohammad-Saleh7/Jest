const getAverage = require("./1-getAverage");

describe("describe", () => {
  test("Should return average greater than 5", () => {
    expect(getAverage(10, 10, 10)).toBeGreaterThan(5);
  });

  test("Should return average less than 10", () => {
    expect(getAverage(5, 5, 5)).toBeLessThan(10);
  });

  test("Should return average equal to 10", () => {
    expect(getAverage(10, 10, 10)).toBe(10);
  });
});
