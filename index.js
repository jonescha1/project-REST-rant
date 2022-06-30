require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// This is the 404 wildcard route. If the user types in a route that does not exist, it will return this.
// Make sure this route is at the bottom or it will override the other routes.
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
