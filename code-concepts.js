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

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user 1!");
    next();
    res.send("Response!");
  },
  (req, res) => {
    console.log("Handling the route user 2!");
    res.send("2nd Response!");
  }
);
