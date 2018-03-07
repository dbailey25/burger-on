// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgersController.js");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up Handlebars to serve html views
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Initiate the listener.
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
