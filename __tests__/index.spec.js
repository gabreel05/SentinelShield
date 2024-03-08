const request = require("supertest");

const server = require("../src/index");

describe("GET /test", () => {
  afterAll(() => {
    server.close();
  });

  it("should return a list of users", async () => {
    // GIVEN
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];

    // WHEN
    const response = await request(server).get("/test");

    // THEN
    expect(response.body).toEqual(users);
  });
});
