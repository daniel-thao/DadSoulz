require("dotenv").config();
const express = require("express");
// const exphbs = require("express-handlebars");
const db = require("./Backend/models");

const bodyParser = require("body-parser");

// API Routes
const apiRoutes = require("./Backend/routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/user", apiRoutes.User);

let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
// Starting the server, syncing our models ------------------------------------/

module.exports = app;
