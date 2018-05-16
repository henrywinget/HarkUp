const read = require("node-readability");

read("https://trackchanges.postlight.com/friday-links-design-edition-a6ba00e29f70", (err, article, meta) => {
    if (err) { throw err };
    console.log(`Article Title: ${article.title}`);
    console.log(`Article: ${article.textBody}`);
    // console.log(meta);

    article.close();
});