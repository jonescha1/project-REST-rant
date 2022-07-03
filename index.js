require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/places", require("./controllers/places"));

// This is the home/root route.
app.get("/", (req, res) => {
  res.render("home");
});

// This is the 404 wildcard route. If the user types in a route that does not exist, it will return this.
// Make sure this route is at the bottom or it will override the other routes.
app.get("*", (req, res) => {
  res.status(404).render("error404");
});

app.listen(process.env.PORT);
