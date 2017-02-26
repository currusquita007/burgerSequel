
// Dependencies
// =============================================================
var express = require("express");

var routerBurger = express.Router();

//Requiring the models
var db = require("../model");


// Create all our routes and set up logic within those routes where required.
routerBurger.get("/", function(req, res) {
  db.burger.findAll({
  }).then(function(DBburgers) {

    //we use res.render instead of res.send because we are using handlebars and the 
    //index.hadlerbars file is dyamically popullated

    res.render("index", {burger: DBburgers});
  }).catch(function(error){
    console.log(error);
  });
});


// POST route for saving a new burger request
routerBurger.post("/burger", function(req, res) {
 console.log(req.body);
  db.burger.create(req.body).then(function(DBburgers) {
    res.redirect("/");
  });
});


routerBurger.put("/:id", function(req, res) {
// once user click on "eat burger" button, we updated the status
// of devoured from false to true
    db.burger.update({
      devoured: 1
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(DBburgers) {
      console.log(DBburgers);
      res.redirect("/");
    });
});




// Export routes for server.js to use.
module.exports = routerBurger;


