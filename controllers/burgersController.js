var express = require("express");
var router = express.Router();

var burger = require("../models/burgers");


router.get("/", function(req, res){
    
    burger.all(function(data){
        var hbsObject = {
            burger: data
        }
        res.render("index", hbsObject)
    });
});

router.post("/burgers", function(req, res){
    
    burger.create( [req.body.Burger], function(result){
        res.send({ id: result.insertId})
    });

});

router.put("/burgers/:id", function(req, res){
    var id = req.params.id;
    burger.upDate(id, function(result){
        if(result.changedRows ===0 ){
            return res.status(404).end();
        }
        res.status(200).end()

    })
})



module.exports = router;