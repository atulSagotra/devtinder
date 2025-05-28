const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

// Handle Auth Middleware for admin requests
app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  // Logic of fetching all data
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  // Logic of fetching all data
  res.send("Deleted a user");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User Data Send");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
