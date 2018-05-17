// File to initialize the application
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const read = require("node-readability");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/articles", (req, res) => {

    // console.log(`req.body: ${JSON.stringify(req.body)}`);
    // console.log(`req.body.name: ${req.body.name}`);

    read(req.body.name, (err, article, meta) => {
        if (err) { throw err; }
        console.log(article.textBody);
        console.log("---------------------------------------------------------------------------------");
        const parsed_article = {
            title: article.title,
            content: article.content,
            text: article.textBody,
            html: article.html
        };
        // res.send(parsed_article);
        res.json(parsed_article);
        article.close();
    });
});

app.listen(PORT, () => {
    console.log("server started.");
});