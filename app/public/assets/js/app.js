$(() => {

    // When user click the play button
    $("#play").on("click", (event) => {
        event.preventDefault();
        const title = $("#article-title").text();
        const content = $("#article-content").text();
        playArticle(title, content);

    });

    function playArticle(title, content) {
        responsiveVoice.speak(title, "UK English Male");
        responsiveVoice.speak(content, "UK English Female");
    }
});
