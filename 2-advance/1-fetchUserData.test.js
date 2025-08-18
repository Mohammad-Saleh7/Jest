const fetchUserData = require("./1-fetchUserData");

describe("describe", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should return mocked user data for userId 1", async () => {
    const mockedUser = { id: 1, name: "User 1" };
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockedUser),
    });
    const result = await fetchUserData(1);
    expect(result).toEqual(mockedUser);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
  });
  test("should return correct structure for userId 3", async () => {
    const mockedUser = {
      id: 3,
      name: "User 3",
      email: "user3@example.com",
    };

    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockedUser),
    });

    const result = await fetchUserData(3);

    expect(result).toHaveProperty("id", 3);
    expect(result).toHaveProperty("name", "User 3");
    expect(result).toHaveProperty("email", "user3@example.com");
  });
});
