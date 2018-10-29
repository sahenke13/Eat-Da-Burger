var express = require("express");
var router = express.Router();

var burger = require("../models/burgers");


router.get("/", function(req, res){
    
    console.log("\n GET / Route Working");

    burger.all(function(data){
        var hbsObject = {
            burger: data
        }
     
        res.render("index", hbsObject)
    });
});

router.post("/burgers", function(req, res){
    
    console.log("\nThis is a test on the api/burgers route\n")
    console.log("The request is for "+ req.body.Burger)

    burger.create( [req.body.Burger], function(result){
        // res.redirect('/');
        res.send({ id: result.insertId})
    });

});

// router.update("/api/burgers/:id", function(req, res){




// })



module.exports = router;