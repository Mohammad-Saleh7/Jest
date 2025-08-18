const simpleSum = require("./1-sum");

test("Should return the sum of 7 + 7", () => {
  const sum = simpleSum(7, 7);
  expect(sum).toBe(14);
});
