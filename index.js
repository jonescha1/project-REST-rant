// DEPENDENCIES
const express = require("express");
const chalk = require("chalk"); //Chalk is just used to configure the console output color. In order to use in this app, we have to install version 4.1.2 of chalk.

// CONFIGURATION
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000; // Port variable that is retrieved from the .env file.

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));

// THIS IS THE HOME/ROOT ROUTE
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// PLACES ROUTE
app.use("/places", require("./controllers/places"));

// This is the 404 wildcard route. If the user types in a route that does not exist, it will return this.
// Make sure this route is at the bottom or it will override the other routes.
app.get("*", (req, res) => {
  res.status(404).render("error404");
});

// Listen
app.listen(PORT, () => {
  console.log(
    chalk.bold.bgWhiteBright.magentaBright(`Server started on Port: ${PORT}`)
  );
});
