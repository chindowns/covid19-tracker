var country = "us";
var healthQuery = "https://newsapi.org/v2/top-headlines?country=" + country + "&category=health&apiKey=fee4776affce4f0fa44e7bca791fbb01"
var countries = ["be", "ch", "cn", "de", "fr", "gb", "it", "nl", "tr", "us"]

$(document).on("click", function(event) {
    country = $("#idtagforPin").val()
    getHealthNews(country)
})

function getHealthNews() {
    $.ajax({
        url: healthQuery,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var articles = response.articles
        for (var i = 0; i < 10; i++) {
            console.log(articles[i]);
            var headline = articles[i].title
            console.log(headline)
            var link = articles[i].url
            console.log(link)
            var author = articles[i].author
            if (author !== null) {
                console.log(author)
            }
            var pubSource = articles[i].source.name
            console.log(pubSource)
            var pubDate = articles[i].publishedAt
            console.log(pubDate)
            $("#news-box").append($articleList);
            var $articleList = $("<ul>");
            $articleList.addClass("list-group");
            // Cerate list it
            var $articleListItem = $("<li class='list-group-item articleHeadline'>");
            // Append Title and url
            $articleListItem.append("<h5><a href='" + link + "' target='_blank'>" + headline + "</a></h5>");
            // Append article source
            $articleListItem.append("<h5>Source: " + pubSource + "</h5>")
            // If author exists, append to article list
            if (author !== null) {
                $articleListItem.append("<h5>Author: " + author + "</h5>");
            }
            // Append pubDatea to document if exists
            $articleListItem.append("<h5>" + pubDate + "</h5>");
            // Append hr to separate article data
            $articleListItem.append("<br/>");
            // Append the article
            $articleList.append($articleListItem);
        }

    });
}

getHealthNews()



// News Feed

// Linked headline
// author
// pub source
// pub date