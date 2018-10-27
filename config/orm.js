
var connection = require('./connection');

var orm = {
    selectWhere: function(tableInput, callback){
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            callback(result);
            // console.log(result)
                });
                
    }
}


module.exports = orm;