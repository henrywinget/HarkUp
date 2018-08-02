// // Dependencies for MySQL connection
const mysql = require("mysql");

// // Configure MySQL connection
var connection = "";

if (process.env.JAWSDB_URL) {
    // connection = mysql.createConnection(process.env.JAWSDB_URL);
    connection = "mysql://a8cvv8e793ilfmxb:vurbjc4p9c4smxew@cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/pb3kycf2wo314bl0";
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