$("#submit").on("click", function (event) {
    event.preventDefault();


    const url = {
        name: $("#url-input").val().trim()
    }

    console.log(`URL: ${url}`);

    $.post("/api/articles", url)
        .then((data) => {
            if (data) {
                console.log(data);
                $("#article-title").html(data.title);
                $("#article-content").html(data.text);
                responsiveVoice.speak(data.title);
                responsiveVoice.speak(data.text);
            }
        });
});