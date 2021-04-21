var mysql      = require('mysql2');

var connection = mysql.createConnection({
    host     : 'mydatabase',
    database : 'testDatabase',
    user     : 'dbuser',
    password : 'dbpass',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query("INSERT INTO example(datakey, datavalue) VALUES ('mykey','myvalue')", function(){
  console.log("data inserted");
});
connection.query("SELECT * FROM example", function(error, results, fields){
    console.log(results);
    console.log("data read");
});

connection.end();