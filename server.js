








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


app.get("/api/:people?", function(req, res) {

    var chosen = req.params.people;

  if (chosen === "table") {
    
    for (var i = 0; i < 4; i++) {
        return res.json(tables[i]);
    } 
    }else if (chosen === "waitlist") {
        for (var i = 5; i < tables.length; i++) {
        return res.json(tables[i]);
      }
        
    }
    return res.json(false);
 
});


var tables = [];




// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newTable = req.body;

  console.log(newTable);

  characters.push(newTable);

  res.json(newTable);
});


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});



