// Bring in Express
const express = require("express");

// Make the middleware for express
const router = express.Router();

// Bring in the right database model structure
const db = require("../models");

// console.log(db.Users + "");
router.get("/", (req, res) => {
  db.Users.create({
    accountName: "test",
    hashedPW: "notHashed",
    email: "email",
    level: 0,
    hp: 100,
  }).then((newUser) => {
    res.json(newUser);
  });
});

module.exports = router;
