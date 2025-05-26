const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Atul", lastName: "Sagotra" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully Saved to Database!");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted from Database!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
