require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Jonescha1:Cej0517562@learningcluster.4x72h.mongodb.net/rest-rant",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports.Place = require("./places");
module.exports.Comment = require("./comment");
