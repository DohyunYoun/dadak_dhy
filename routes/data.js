/*var mysql = require('promise-mysql');

var db_port = process.env.DB_PORT;
var db_user = process.env.DB_USER;
var db_pw = process.env.DB_PW;
var db_host = process.env.DB_HOST;
var db_name = process.env.DB_NAME;


// create mysql db config
var config = {
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_pw,
    database: db_name,
};


var conn;
mysql.createConnection(config).then(function(connection) {
    conn = connection;
});

exports.getDataFromDatabase = function(str) {
    var result;
        var query = "select * from database where data=" + "\'" + str + "\'";

        conn.query(query).then(function(rows) {
            result=rows;
            if (rows == undefined || rows.length == 0) {
                throw new Error('empty');
            }
        }).then(function() {
            console.log('success')
            return result;
        }).catch(function(err) {
            error(res, err.message);
            console.log(err.message);
        });
};

*/