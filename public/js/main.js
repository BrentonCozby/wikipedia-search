$(document).ready(function() {

    $(".search-container").fadeIn(1000);

    function getArticles(string) {
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + string,
            dataType: "jsonp",
            success: function(response) {
                console.log(response);

                $("#articles").html("").show();

                response.query.search.forEach(function(obj) {
                    var article = articleMaker(obj.title, obj.snippet);
                    $('#articles').append(article);
                });

                for(var i = 0, x = $('.article').length; i < x; i++) {
                    (function(i) {
                        setTimeout(function() {
                            $('.article')[i].style.opacity = '1';
                        }, 100 * i);
                    })(i);
                }
            }
        });
    }

    function articleMaker(title, snippet) {
        var article = (
            '<div class="article">' +
                '<a href="https://en.wikipedia.org/wiki/' + title + '"target="_blank">' +
                    '<h3>' + title + '</h3>' +
                    '<p>"...' + snippet + '..."</p>' +
                '</a>' +
            '<div>'
        );

        return article;
    }

    $("#search").on("keydown", function(event) {
        if (event.keyCode === 13) {
            $("#articles").fadeOut(200, function() {
                getArticles($("#search").val());
                $("#search").val("");
            });
        }
    });

});
