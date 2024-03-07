const request = require("supertest");

const server = require("../src/index");

describe("GET /test", () => {
  afterAll(() => {
    server.close();
  });

  it("should return status code 404", async () => {
    const response = await request(server).get("/test");
    expect(response.statusCode).toBe(404);
  });
});
