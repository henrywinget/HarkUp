// Dependencies
const express = require("express");
const router = express.Router();
const read = require("node-readability");

// Route handler for homepage
router.get("/", (req, res) => {
    res.render("index");
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
// Export router functionality for server to use
module.exports = router;