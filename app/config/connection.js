// Dependencies for MySQL connection
const mysql = require("mysql");

// Configure MySQL connection
const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    database: "HarkUp",
    user: "root",
    password: "",
});

// Establish MySQL connection
connection.connect(err => {
    if (err) { throw err; }
    console.log(`My SQL connection established...thread ID: ${connection.threadId}`);
});

// Export MySQL connection to be used by server
module.exports = connection;