const router = require("express").Router();
const places = require("../models/places.js");

router.get("/", (req, res) => {
  res.render("places/index", { places, title: "Restaurants" });
});

// Router to new form page
router.get("/new", (req, res) => {
  res.render("places/new");
});

// Showpage router
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id });
  }
});

// New router
router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  //Default city if one is not provided
  if (!req.body.city) {
    req.body.city = "My City";
  }
  // Default state if one is not submitted
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

// This is the update router
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = "http://placekitten.com/400/400";
    }
    //Default city if one is not provided
    if (!req.body.city) {
      req.body.city = "A Town";
    }
    // Default state if one is not submitted
    if (!req.body.state) {
      req.body.state = "A State";
    }
    // Save the new data into places[id]
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

// This is the delete router
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

module.exports = router;
