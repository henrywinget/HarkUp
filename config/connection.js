// // Dependencies for MySQL connection
const mysql = require("mysql");

// // Configure MySQL connection
var connection = "";

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "HLWxs20",
    database: "HarkUp"
    });
}
// // Establish MySQL connection    
connection.connect(function (err) {
    if (err) throw err;
    console.log(`My SQL connection established...thread ID: ${connection.threadId}`);
});



// // Export MySQL connection to be used by server
module.exports = connection;