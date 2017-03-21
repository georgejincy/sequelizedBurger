var db = require("../models");

var express = require("express");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(dbBurger){
    var hbsObject = {
      burgers: dbBurger
    };
    console.log(hbsObject);
   res.render("index", hbsObject);
  });

});

router.put("/burgers/update/:id", function(req, res) {

  db.Burger.update({
    devoured: req.body.devoured
    }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
  
});

router.post("/burgers/create", function(req, res) {
  console.log(req.body.burgername);

  db.Burger.create({burger_name: req.body.burgername}).then(function() {
    res.redirect("/");
  });
});



/*router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function() {
    res.redirect("/");
  });
});
*/
// Export routes for server.js to use.
module.exports = router;
