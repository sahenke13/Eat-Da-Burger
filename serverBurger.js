var orm = require('./config/orm');

orm.selectWhere('burgersToEat', function(data){
    for (let i in data){  
        console.log("buregers to Eat: "+ data[i].EatBurger)
    }
});

orm.selectWhere('burgersEaten', function(data){
    for (let i in data){
        
        console.log("buregers to Eat: "+ data[i].EatenBurger)
    }
})