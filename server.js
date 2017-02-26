// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3001;

// Requiring our models for syncing

var db = require("./model");


// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ============================================================
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

var routeBurgers = require("./controllers/burgers_controller.js");
app.use("/", routeBurgers);

// Starts the server to begin listening
// =============================================================
// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});