var express = require("express");
var router = express.Router();

var burger = require("../models/burgers");


router.get("/", function(req, res){
    console.log("/ on router get working")
    burger.allToEat(function(data){
        var test = {
            EatBurger: data
        }
        console.log(test)
        res.render("index", test)
    });
})

module.exports = router;