const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

app.get("/test", (_, res) => {
  res.send(users);
});

const server = app.listen(3000);

module.exports = server;
