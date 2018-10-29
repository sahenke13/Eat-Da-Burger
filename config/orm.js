
var connection = require('./connection');

var orm = {
    all: function(callback){
        var queryString = "SELECT * FROM burgers"
        console.log("QueryString is:  "+ queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;
            
            callback(result);
                });    
    },
    create: function(burger, callback){
        var queryString = "INSERT INTO burgers (burger) VALUE ('"+burger+"')";
        console.log("QueryString is:  "+ queryString);
        connection.query(queryString, burger, function(err, result){
            if(err)throw err;
           
           callback(result);          
        })
    },
    upDate: function(id, callback){
        var queryString = "UPDATE burgers SET Eaten = true WHERE ID = ?";
        console.log("QueryString is:  "+ queryString);
        connection.query(queryString, [id], function(err, result){
            if (err) throw err;

            callback(result);
        })
    }
}
    
module.exports = orm;

