const filterElement = require("./2-filterElement");

describe("describe", () => {
  test('should return empty array when filtering "Mohammad" in empty array', () => {
    expect(filterElement([], ["Mohammad"])).toEqual([]);
  });
  test('should return ["Mohammad"] when filtering "Mohammad" in ["Mohammad"]', () => {
    expect(filterElement(["Mohammad"], "Mohammad")).toEqual(["Mohammad"]);
  });
});
