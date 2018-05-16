// var db = require("../models");
var path = require("path");
// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    console.log("We're here!");
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
}
