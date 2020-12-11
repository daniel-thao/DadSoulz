// Bring in Express
const express = require("express");

// Make the middleware for express
const router = express.Router();

// Bring in the right database model structure
const db = require("../models");

// console.log(db.Users + "");
router.get("/", (req, res) => {
  db.Users.findAll().then((newUser) => {
    res.json(newUser);
  });
});

module.exports = router;
