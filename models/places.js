const mongoose = require("mongoose");
const placeSchema = new mongoose.mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: "anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

module.exports = mongoose.model("Place", placeSchema);
