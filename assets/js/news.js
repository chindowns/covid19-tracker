function getHealthNews(location) {
    var myHeaders = new Headers();
    myHeaders.append("Ocp-Apim-Subscription-Key", "c2decef408fc448890304329c262609e");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=" + location + "+Coronavirus&count=10&offset=0&mkt=en-us&safeSearch=Moderate", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            $("#news-box").empty();
            const articles = result.value

            // clear news
            const news = [];

            // Sets the news list objects to 10 articles in an array
            for (var i = 0; i < 10; i++) {
                var headlines = {
                    headline: articles[i].name,
                    link: articles[i].url,
                    description: articles[i].description,
                    author: articles[i].provider[0].name,
                    pubDate: articles[i].datePublished.slice(0, 10)
                };
                news.push(headlines);
            }

            // console.log(news);
            renderNews(news);
        })
        .catch(error => console.log('error', error));
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
        $('#content' + [i]).append(news[i].author ?
            `${news[i].description}<br />Pub Date: ${news[i].pubDate} &nbsp &nbsp  | &nbsp &nbsp  ${news[i].author}` :
            `Pub Date: ${news[i].pubDate}`);

    }
}

