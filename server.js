// Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const routes = require("./controllers/articleRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Use static folder to serve pages
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

// Use body parser to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars for templates
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);



// Initialize server
app.listen(PORT, () => {
    console.log(`Server started, listening on PORT ${PORT}...`);
});