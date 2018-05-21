// ORM file
const mysql = require("./connection");

const orm = {
    createNewUser: (table, newUser, cb) => {
        const colVals = "(full_name, user_email, signup_date)";
        const userInfo = `'${newUser.full_name}', '${newUser.user_email}', '${newUser.signup_date}'`;
        const queryString = `INSERT INTO ${table} ${colVals} VALUES (${userInfo});`;

        // console.log(`Table info: ${table}`);
        // console.log(`User Details: ${newUser.firstName}`);
        // cb("Success");

        mysql.query(queryString, (err, result) => {
            if (err) { throw err; }
            console.log(result);
            cb(result);
        });

    },
    validateUser: (table, user, cb) => {
        // Run a query that will check for the existing user in the database.
        // If the number of rows affected is equal to 0, then add the user to the database
        // If the number of rows affect is not equal to 0, then return the user data.
    }
};

module.exports = orm;