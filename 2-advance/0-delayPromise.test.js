const getUserWithDelay = require("./0-delayPromise");

describe("describe", () => {
  test("should return correct user object", async () => {
    const user = await getUserWithDelay(5);
    expect(user).toEqual({ id: 5, name: "User 5" });
  });

  test("should delay at least 1000ms before returning result", async () => {
    const startTime = Date.now();
    await getUserWithDelay(1);
    const endTime = Date.now();
    const duration = endTime - startTime;

    expect(duration).toBeGreaterThanOrEqual(1000);
  });
});
