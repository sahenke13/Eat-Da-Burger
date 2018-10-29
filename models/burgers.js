var orm = require('../config/orm');

var burger ={
    all: function(cb) {
        orm.all(function(res){
          cb(res);         
                });
    },


    create: function(burger, cb){
        orm.create(burger, function(res){
            cb(res);
        });
    },
    

    upDate: function(id, cb){
        orm.upDate([id], function(res){
            cb(res);
        });
    }
};


module.exports = burger;

