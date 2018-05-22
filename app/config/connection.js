// // Dependencies for MySQL connection
const mysql = require("mysql");

// // Configure MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "HLWxs20",
    database: "HarkUp"
});
// // Establish MySQL connection    
connection.connect(function (err) {
    if (err) throw err;
    console.log(`My SQL connection established...thread ID: ${connection.threadId}`);
});



// // Export MySQL connection to be used by server
module.exports = connection;