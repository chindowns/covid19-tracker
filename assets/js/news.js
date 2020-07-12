function getHealthNews(location) {

    fetch(`https://google-news.p.rapidapi.com/v1/topic_headlines?country=${location}&lang=en&topic=health`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "google-news.p.rapidapi.com",
            "x-rapidapi-key": "e0fb17d10fmsh6564ffe40545be1p170617jsn4f815da207ed"
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            $("#news-box").empty();
            const articles = result.articles

            // clear news
            const news = [];
            // Sets the news list objects to 10 articles in an array
            for (var i = 0; i < 10; i++) {
                var headlines = {
                    headline: articles[i].title,
                    link: articles[i].link,
                    author: articles[i].source.title,
                    pubSource: articles[i].source.href,
                    pubDate: articles[i].published
                };
                news.push(headlines);
            }
            // console.log(news);
            renderNews(news);
        })
        .catch(err => {
            console.log(err);
        });


    // $.ajax({
    //     url: "https://newsapi.org/v2/top-headlines?country=" + location + "&category=health&apiKey=8ca0b59b73c84ee996ce37c7f99dff97",
    //     method: "GET",
    //     headers: {
    //         "Access-Control-Allow-Origin": "https://chindowns.github.io",
    //         "Cookie": "__cfduid=df89ecbf3b90f7d841bd20cdc251bb6411594500138"
    //       },
    // }).then(function (response) {

    //     // Clears News DIV when a country query responds
    //     $("#news-box").empty();
    //     var articles = response.articles

    //     // clear news
    //     var news = [];

    //     // Sets the news list objects to 10 articles in an array
    //     for (var i = 0; i < 10; i++) {
    //         var headlines = {
    //             headline: articles[i].title,
    //             link: articles[i].url,
    //             author: articles[i].author,
    //             pubSource: articles[i].source.name,
    //             pubDate: articles[i].publishedAt
    //         };
    //         news.push(headlines);
    //     }
    //     // console.log(news);
    //     renderNews(news);
    // });
}

function renderNews(news) {
    //renders the News in the box
    for (var i = 0; i < news.length; i++) {

        // Create News card divs
        $('#news-box').append('<div id="news-card' + [i] + '" class="card">');
        $('#news-card' + [i]).html('<div id="card-header' + [i] + '" class="card-header">');
        $('#news-card' + [i]).append('<div id="card-content' + [i] + '" class="card-content">');
        $('#card-content' + [i]).html('<div id="content' + [i] + '" class="content">');

        // Headline and URL
        $('#card-header' + [i]).html('<p class="card-header-title"><a href="' + news[i].link + '" target="blank">' + news[i].headline + '</a></p>');

        // Article source and Pub Date
        $('#content' + [i]).html('<p>Source: ' + news[i].pubSource + '<br/>Pub Date: ' + news[i].pubDate + '</p>');

        // If Author exists append
        if (news[i].author !== null) {
            $('#content' + [i]).append('Author: ' + news[i].author);
        }
    }
}
