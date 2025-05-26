const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Namaste from the Dashboard");
});

app.get("/test", (req, res) => {
  res.send("Hello Test is success");
});

app.get("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
