// Dependencies
const express = require("express");
const router = express.Router();
const read = require("node-readability");

// Import ORM
const orm = require("../config/orm");

// Route handler for displaying homepage
router.get("/", (req, res) => {
    res.render("index");
});

// TO BE DELETED IF NOT USED
// router.get("/authentication", (req, res) => {
//     res.redirect("/");
// });

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

// Route handler for new user signup
router.post("/signup", (req, res) => {
    const tableInput = "user_info";
    console.log(req.body);
    orm.createNewUser(tableInput, req.body, results => {
        console.log("Success.");
        res.render("index");
    });
});

// Route for handling existing users signin
router.post("/signin", (req, res) => {
    // This route will use the ORM validateUser method to query the database for the
    // user info submitted.
    console.log(req.body);
});

// Export router functionality for server to use
module.exports = router;