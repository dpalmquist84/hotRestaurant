








// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;


var tables = [];




// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newTable = req.body;

  console.log(newTable);

  characters.push(newTable);

  res.json(newTable);
});



