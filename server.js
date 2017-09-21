








// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Basic route that sends the user first to the homepage Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


app.get("/api/tables", function(req, res) {

return res.json(tables);

});

app.get("/api/waitlist", function(req, res) {

return res.json(waitingList);

});

var tables = [];




// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newTable = req.body;

  console.log(newTable);

  characters.push(newTable);

  res.json(newTable);
});



