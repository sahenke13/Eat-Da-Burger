var orm = require('../config/orm');


var burger ={
    allToEat: function(cb) {
        orm.selectWhere('burgersToEat', function(data){
          cb(data);
            for (let i in data){  
        console.log("burgers to Eat: "+ data[i].EatBurger);

    }
});
},

    allEaten: function(cb){
        orm.selectWhere('burgersEaten', function(data){
            cb(data);
        for (let i in data){
        console.log("burgers that have been Eaten: "+ data[i].EatenBurger)
    }
});
    }
}


module.exports = burger;