// ORM file
const mysql = require("./connection");

// Create a user_info Object
function createInfoObj() {
    const info_table = "user_info";
    const info = {
        id: `${info_table}.user_id`,
        name: `${info_table}.full_name`,
        email: `${info_table}.user_email`,
        signup_date: `${info_table}.signup_date`
    }
    return info;
}

// Create a user_preferences Object
function createPrefObj() {
    const pref_table = "user_preferences";
    const preferences = {
        email: `${pref_table}.user_email`,
        voice: `${pref_table}.voice_preference`,
        reason: `${pref_table}.signup_reason`,
        signup_date: `${pref_table}.signup_date`
    };
    return preferences;
}

// Create a user_articles Object
function createArticleObj() {
    const article_table = "user_articles";
    const articles = {
        email: `${article_table}.user_email`,
        website: `${article_table}.website_url`,
        date_added: `${article_table}.date_added`
    };
    return articles;
}

// Function to handle all MySQL queries
// function runQuery(queryString) {
//     mysql.query(queryString, (err, result) => {
//         if (err) { throw err; }
//         return result;
//     });
// }

// Object Relational Mapper for MySQL queries
const orm = {
    // Create a new user and add them to the user_info table
    createNewUser: (user, cb) => {
        const info_table = "user_info";
        const colVals = "full_name, user_email, signup_date";
        const userInfo = `'${user.full_name}', '${user.user_email}', '${user.signup_date}'`;
        const queryString = `INSERT INTO ${info_table} (${colVals}) VALUES (${userInfo});`;

        // console.log(`Table info: ${table}`);
        // console.log(`User Details: ${newUser.firstName}`);
        // cb("Success");

        mysql.query(queryString, (err, result) => {
            if (err) { throw err; }
            console.log(result);
            cb(result);
        });

    },
    // Add an article to the user's list
    addArticle: (email, url, date_added, cb) => {
        const article_table = "user_articles";
        const queryString = `INSERT INTO ${article_table} VALUES ('${email}', '${url}', '${date_added}')`;

        mysql.query(queryString, (err, result) => {
            if (err) { throw err };
            cb(result);
        });
    },
    // Get the list of URLs for a user based on their email address
    getUserList: (email, cb) => {
        const article_table = "user_articles";
        const info = createInfoObj();
        const articles = createArticleObj();

        const queryString = `SELECT ${info.id}, ${info.name}, ${info.email},`;
        queryString += `${articles.website}, ${articles.date_added} `;
        queryString += `FROM ${info_table} LEFT JOIN ${article_table}`;
        queryString += `ON ${info.email} = ${articles.email}`;
        queryString += `WHERE ${info.email} = ${email}`;

        mysql.query(queryString, (err, result) => {
            if (err) { throw err; };
            console.log(result);
            cb(result);
        });

    },
    // Get the preferences for a user based on their email address
    getUserPreference: (email, cb) => {
        const pref_table = "user_preferences";
        const info = createInfoObj();
        const preferences = createPrefObj();

        const queryString = `SELECT ${info.id}, ${info.name}, ${info.email},`;
        queryString += `${preferences.voice}, ${preferences.reason}, ${preferences.signup_date}`;
        queryString += `FROM ${info_table} LEFT JOIN ${pref_table}`
        queryString += `ON ${info.email} = ${preferences.email}`;
        queryString += `WHERE ${info.email} = ${email}`;

        mysql.query(queryString, (err, result) => {
            if (err) { throw err; }
            cb(result);
        });

    },
    // Update the preference for a user based on their email address
    updateUserPreferences: (email, cb) => {
        // TODO: Setup the query method to update a user's preference, based on what option they choose.
        // APPROACH: Use a switch statement on the router side to determine what column is to be updated
    },
    // Delete user from all tables
    deleteUser: (email, cb) => {
        const info_table = "user_info";
        const article_table = "user_articles";
        const pref_table = "user_preferences";

        const info = createInfoObj();
        const articles = createArticleObj();
        const preferences = createPrefObj();

        const queryString = `DELETE ${info_table}, ${article_table}, ${pref_table}`;
        queryString += `FROM ${info_table}`;
        queryString += `INNER JOIN ${pref_table}`;
        queryString += `ON ${info.email} = ${preferences.email}`;
        queryString += `INNER JOIN ${article_table}`;
        queryString += `ON ${info.email} = ${articles.email}`;
        queryString += `WHERE ${info.email} = ${preferences.email}`;
        queryString += `AND ${preferences.email} = ${articles.email}`;
        queryString += `AND ${info.email} = ${email}`;

        mysql.query(queryString, (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    },
    // Validate Social Media sign-up accounts
    validateUser: (user, cb) => {
        const info_table = "user_info";
        const queryString = `SELECT * FROM ${info_table} WHERE ${colVal} = ${user.email}`;

        mysql.query(queryString, (err, result) => {
            if (err) { throw err; }
            if (result) {
                cb(orm.createNewUser(user, cb))
            }
            else { return result; }
        });

        // Run a query that will check for the existing user in the database.
        // If the number of rows affected is equal to 0, then add the user to the database
        // If the number of rows affect is not equal to 0, then return the user data.
    }
};
module.exports = orm;