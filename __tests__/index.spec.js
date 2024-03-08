const request = require("supertest");

const server = require("../src/index");

describe("GET /test", () => {
  afterAll(() => {
    server.close();
  });

  it("should return a list of users", async () => {
    const response = await request(server).get("/test");
    expect(response.body).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
  });
});
