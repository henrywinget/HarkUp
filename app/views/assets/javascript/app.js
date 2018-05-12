var buttonClick = $(this).attr("id");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    buttonClick + "&api_key=vAPghN7nJYPVX5hhXhA9GMpovNI2g7Mm&limit=10";

//Calls our giphy API
$.ajax({
    url: queryURL,
    method: "GET"
})