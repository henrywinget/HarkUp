// $(document).ready(function (){
//     var mysql = require("mysql");
    
//     var connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "HLWxs20",
//         database: "HarkUp"
//     });
    
//     connection.connect(function (err) {
//         if (err) throw err;
//         console.log("Connection to DB established");
//     });


//     $("#submit").on("click", addToHistory, timeAdded);

//     function addToHistory() {
//         var URLentered = $("#url").val();
//         connection.query('INSERT INTO details (user_id, url_history, time_added)VALUES ("'
//     }

//     function timeAdded() {

//     }



// });