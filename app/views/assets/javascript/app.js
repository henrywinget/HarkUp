var cheerio = require('cheerio');
var jsonframe = require('jsonframe-cheerio');
var read = require('node-readability');
// var Boilerpipe = require('boilerpipe');
// var boilerpipe = new Boilerpipe({
//     extractor: Boilerpipe.Extractor.Article,
//     url: 'http://www.nfl.com/news/story/0ap3000000933033/article/panthers-finalize-terms-to-sell-franchise-to-david-tepper'
//   });


read('http://www.nfl.com/news/story/0ap3000000933033/article/panthers-finalize-terms-to-sell-franchise-to-david-tepper', function(err, article, meta, $) {
  // Main Article
    console.log(article.content);
    var $ = cheerio.load(article.content);
    // console.log($('body').html());
    var tags = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "a",
        "ul",
        "li",
        "td",
        "tr"
    ];

    function loopArray() {
        for (var j = 0; j < tags.length; j++) {
            var tag = tags[j];
            var tagArr = $(tag).toArray();
            for (var f = 0; f < tagArr.length; f++) {
                if (tagArr[f].children[0].data) {
                    console.log(tagArr[f].children[0].data);
                }
            };
        };
    }

    loopArray();
});




// jsonframe($);
// var frame = {
//     "title": "h1",
//     "title2": "h2",
//     "title3": "h3",
//     "title4": "h4",
//     "title5": "h5",
//     "title2": "h6",
//     "paragraph": "p",
//     "_p": "p",
//     "list": "ul",
//     "list-item": "li"
// };
// var items = [];
// var result = $('body').scrape(frame, { string: true });
// =========================================================================
// var p = $('p').toArray();
// var h1 = $('h1').toArray();
// var h2 = $('h2').toArray();
// var h3 = $('h3').toArray();
// var h4 = $('h4').toArray();
// var h5 = $('h5').toArray();
// var h6 = $('h6').toArray();
// var ul = $('ul').toArray();
// var li = $('li').toArray();
// console.log(p);
// for(var i = 0; i < p.length; i++){
//     if (h1 == null){

//     }
//     console.log(h1[i].children[0].data);
//     console.log(h2[i].children[0].data);
//     console.log(h3[i].children[0].data);
//     console.log(h4[i].children[0].data);
//     console.log(h5[i].children[0].data);
//     console.log(h6[i].children[0].data);
//     console.log(ul[i].children[0].data);
//     console.log(li[i].children[0].data);
//     console.log(p[i].children[0].data);
// }
// $.html();