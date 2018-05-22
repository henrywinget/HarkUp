// // // Dependencies for MySQL connection
// var mysql = require("mysql");

// // // Configure MySQL connection
// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "HLWxs20",
//     database: "HarkUp"
// });
// // // Establish MySQL connection    
// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connection to DB established");
// });


// $("#submit").on("click", addToHistory, timeAdded);

// function addToHistory() {
//     var URLentered = $("#url").val();
//     connection.query('INSERT INTO details (user_id, url_history, time_added)VALUES ("'
//     }

// function timeAdded() {

// }

// // // Export MySQL connection to be used by server
// module.exports = connection;