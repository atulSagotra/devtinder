const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const connectDB = require("./config/databse");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  // creating a new instance of the user model
  const userObj = {
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "Vira@gmail.com",
    password: "priya123",
  };
  const user = new User(userObj);
  try {
    await user.save();
    res.send("User added successfully ");
  } catch (err) {
    res.status(400).send("Error saving the user: ", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
