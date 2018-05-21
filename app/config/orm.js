// ORM file
const mysql = require("./connection");

const orm = {
    createNewUser: (table, newUser, cb) => {
        const colVals = "(first_name, last_name, user_email, user_password)";
        const userInfo = `'${newUser.firstName}', '${newUser.lastName}', '${newUser.email}', '${newUser.password}'`;
        const queryString = `INSERT INTO ${table} ${colVals} VALUES (${userInfo});`;

        // console.log(`Table info: ${table}`);
        // console.log(`User Details: ${newUser.firstName}`);
        // cb("Success");

        mysql.query(queryString, (err, result) => {
            if (err) { throw err; }
            console.log(result);
            cb(result);
        });

    }
};

module.exports = orm;