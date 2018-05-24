// Dependencies
const express = require("express");
const router = express.Router();
const read = require("node-readability");

// Import ORM
const orm = require("../config/orm");
let user_email = null;

// Route handler for displaying default homepage
router.get("/", (req, res) => {
    console.log(`Home page requested. ${req.body.params}`);
    res.render("index");
});
router.get("/favicon.ico", (req, res) => {
    res.send("/assets/images/harkupfav.png");
})
// Route handler for getting the signup page
router.get("/signup", (req, res) => {
    res.render("signup");
});

// Route handler for processing article URL
router.post("/article", (req, res) => {
    // Convert URL into Readability version
    getArticle(req, res, req.body.url);
});

// Get the reader version of the article 
async function getArticle(req, res, url) {
    try {
        await read(url, (err, article, meta) => {
            if (err) { throw err; }
            const content = {
                title: article.title,
                article: article.textBody
            }
            article.close();
            console.log(`SUCCESS`);
            return res.render("index", content);
        });
    } catch (error) {
        console.log(`Error Logged: ${error}`);
    }

}

// Page to load when authentiation is successful
router.get("/user", (req, res) => {
    console.log(`/user req.body: ${JSON.stringify(req.body)}`);
    return res.render("user", { user_email: user_email });
});

// Route handler to add new user to database
router.post("/api/signup", (req, res) => {
    const tableInput = "user_info";
    console.log(req.body);
    orm.createNewUser(req.body, result => {
        console.log("Successfully added new user.");
        console.log(`Results: ${result}`);
    });
    return res.send(result);
});

// Route for handling existing users signin
router.post("/signed_in", (req, res) => {
    // This route will use the ORM validateUser method to query the database for the
    // user info submitted.
    user_email = req.body.user_email;
    console.log(`User signed in (POST/signed_in): ${JSON.stringify(req.body)}`);
    res.render("index", { user_email: user_email });
});

// Route for getting user dashboard
router.get("/user/dashboard", (req, res) => {
    orm.getUserPreference(user_email, (data) => {
        console.log(`returned from query.${JSON.stringify(data, null, 2)}`);
        res.render("dashboard", { user: data });
    });

});

// Export router functionality for server to use
module.exports = router;