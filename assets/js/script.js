// define global variables
let countries = {}; 

// Renders the map on the page
const accessToken = 'pk.eyJ1IjoianVsaWV0LWdlb3JnZSIsImEiOiJjazhnOXNzN3gwMXoyM2RxbjNzbXdrYXJjIn0.a653svYKdCmg2wkjY5HxVg';
var map = L.map('map').setView([30, -40], 3);

// Add tiles from the Mapbox Static Tiles API
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
        tileSize: 512, zoomOffset: -1,
    attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Define global map markers
let marker1;
let marker2;
let marker3;
let marker4;
let marker5;
let marker6;
let marker7;
let marker8;
let marker9;
let marker10;
let marker11;
let marker12;
let marker13;
let marker14;

// Get the Summary data for all Countries
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

fetch("https://api.covid19api.com/summary", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        processGlobalData(result);
    })
    .catch(error => console.log("Failed to get summary data: ", error))

function loadCountryMarkers() {
    // LOAD MAP MARKERS after Summary Data is received
    const orangeIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    
    marker1 = L.marker([39.0119, -98.4842], {icon: orangeIcon}).addTo(map).on('click', countryClick); // US
        marker1.key = "us";
    marker2 = L.marker([41.9028, 12.4964], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Italy
        marker2.key = "it";
    marker3 = L.marker([52.1326, 5.2913], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Netherland
        marker3.key = "nl";
    marker4 = L.marker([35.8617, 104.1954], {icon: orangeIcon}).addTo(map).on('click', countryClick); //China
        marker4.key = "cn";
    marker5 = L.marker([51.1657, 10.4515], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Germany
        marker5.key = "de";
    marker6 = L.marker([46.2276, 2.2137], {icon: orangeIcon}).addTo(map).on('click', countryClick); // France
        marker6.key = "fr";
    marker7 = L.marker([56.1304, -106.3468], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Canada
        marker7.key = "ca";
    marker8 = L.marker([55.3781, -3.4360], {icon: orangeIcon}).addTo(map).on('click', countryClick); // United Kingdom
        marker8.key = "gb";
    marker9 = L.marker([46.8182, 8.2275], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Switzerland
        marker9.key = "ch";
    marker10 = L.marker([50.5039, 4.4699], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Belgium
        marker10.key = "be";
    marker11 = L.marker([-25.2744, 133.7751], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Australia
        marker11.key = "au"
    marker12 = L.marker([-15.8267, -47.9218], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Brazil
        marker12.key = "br"
    marker13 = L.marker([40.4637, -3.7492], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Spain
        marker13.key = "es"
    marker14 = L.marker([55.7558, 37.6173], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Russia
        marker14.key = "ru"
    }
    
    // Loads the markers for each state
    function loadStateMarkers() {
    // MARKERS placed on the states to pull up the US Totals
    const redIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [15, 25],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [25, 25]
      });
    const redCircle = new L.circle({
        color: 'red',
        weight: 0,
        fillColor:'red',
        fillOpacity: 0.5,
        radius: 100000
    });
    const circle01 = L.circle([37.786542, -122.386022], {icon: redIcon}).addTo(map).on('click', onClick);
          circle01.key = "US";
    const circle02 = L.circle([44.50, -89.50], {icon: redIcon}).addTo(map).on('click', onClick);
          circle02.key = "WI";
    const circle03 = L.circle([39.00, -80.50], {icon: redIcon}).addTo(map).on('click', onClick);
          circle03.key = "WV";
    const circle04 = L.circle([44.0, -72.69], {icon: redIcon}).addTo(map).on('click', onClick);
          circle04.key = "VT";
    const circle05 = L.circle([31.00, -100.00], {icon: redIcon}).addTo(map).on('click', onClick);
          circle05.key = "TX";
    const circle06 = L.circle([44.50, -100], {icon: redIcon}).addTo(map).on('click', onClick);
          circle06.key = "ND";
    const circle07 = L.circle([41.70, -71.50], {icon: redIcon}).addTo(map).on('click', onClick);
          circle07.key = "RI";
    const circle08 = L.circle([44.00, -120.50], {icon: redIcon}).addTo(map).on('click', onClick);
          circle08.key = "OR";
    const circle09 = L.circle([43.00, -75.00], {icon: redIcon}).addTo(map).on('click', onClick);
          circle09.key = "NY";
    const circle10 = L.circle([44.00, -71.50], {icon: redIcon}).addTo(map).on('click', onClick);
          circle10.key = "NH";
    const circle11 = L.circle([41.50, -100.00], {icon: redIcon}).addTo(map).on('click', onClick);
          circle11.key = "NE";
    const circle12 = L.circle([38.50, -98.00], {icon: redIcon}).addTo(map).on('click', onClick);
          circle12.key = "KS";
    const circle13 = L.circle([33.00, -90.00], {icon: redIcon}).addTo(map).on('click', onClick);
          circle13.key = "MS";
    const circle14 = L.circle([40.00, -89.00], {icon: redIcon}).addTo(map).on('click', onClick);
          circle14.key = "IL";
    const circle15 = L.circle([39.00, -75.50], {icon: redIcon}).addTo(map).on('click', onClick);
          circle15.key = "DE";
    const circle16 = L.circle([41.59, -72.69], {icon: redIcon}).addTo(map).on('click', onClick);
          circle16.key = "CT";
    const circle17 = L.circle([34.79, -92.19], {icon: redIcon}).addTo(map).on('click', onClick);
          circle17.key = "AR";
    const circle18 = L.circle([40.27, -86.12], {icon: redIcon}).addTo(map).on('click', onClick);
          circle18.key = "IN";
    const circle19 = L.circle([38.57, -92.60], {icon: redIcon}).addTo(map).on('click', onClick);
          circle19.key = "MO";
    const circle20 = L.circle([27.99, -81.76], {icon: redIcon}).addTo(map).on('click', onClick);
          circle20.key = "FL";
    const circle21 = L.circle([39.87, -117.22], {icon: redIcon}).addTo(map).on('click', onClick);
          circle21.key = "NV";
    const circle22 = L.circle([45.36, -68.97], {icon: redIcon}).addTo(map).on('click', onClick);
          circle22.key = "ME";
    const circle23 = L.circle([44.18, -84.50], {icon: redIcon}).addTo(map).on('click', onClick);
          circle23.key = "MI";
    const circle24 = L.circle([33.24, -83.44], {icon: redIcon}).addTo(map).on('click', onClick);
          circle24.key = "GA";
    const circle25 = L.circle([19.74, -155.84], {icon: redIcon}).addTo(map).on('click', onClick);
          circle25.key = "HI";
    const circle26 = L.circle([66.16, -153.36], {icon: redIcon}).addTo(map).on('click', onClick);
          circle26.key = "AK";
    const circle27 = L.circle([35.86, -86.66], {icon: redIcon}).addTo(map).on('click', onClick);
          circle27.key = "TN";
    const circle28 = L.circle([37.92, -78.02], {icon: redIcon}).addTo(map).on('click', onClick);
          circle28.key = "VA";
    const circle29 = L.circle([39.83, -74.87], {icon: redIcon}).addTo(map).on('click', onClick);
          circle29.key = "NJ";
    const circle30 = L.circle([37.83, -84.27], {icon: redIcon}).addTo(map).on('click', onClick);
          circle30.key = "KY";
    const circle31 = L.circle([47.65, -100.43], {icon: redIcon}).addTo(map).on('click', onClick);
          circle31.key = "ND";
    const circle32 = L.circle([46.39, -94.63], {icon: redIcon}).addTo(map).on('click', onClick);
          circle32.key = "MN";
    const circle33 = L.circle([36.08, -96.92], {icon: redIcon}).addTo(map).on('click', onClick);
          circle33.key = "OK";
    const circle34 = L.circle([46.96, -109.53], {icon: redIcon}).addTo(map).on('click', onClick);
          circle34.key = "MT";
    const circle35 = L.circle([47.75, -120.74], {icon: redIcon}).addTo(map).on('click', onClick);
          circle35.key = "WA";
    const circle36 = L.circle([39.41, -111.95], {icon: redIcon}).addTo(map).on('click', onClick);
          circle36.key = "UT";
    const circle37 = L.circle([39.11, -105.35], {icon: redIcon}).addTo(map).on('click', onClick);
          circle37.key = "CO";
    const circle38 = L.circle([40.36, -82.99], {icon: redIcon}).addTo(map).on('click', onClick);
          circle38.key = "OH";
    const circle39 = L.circle([32.31, -86.90], {icon: redIcon}).addTo(map).on('click', onClick);
          circle39.key = "AL";
    const circle40 = L.circle([42.03, -93.58], {icon: redIcon}).addTo(map).on('click', onClick);
          circle40.key = "IA";
    const circle41 = L.circle([34.30, -106.01], {icon: redIcon}).addTo(map).on('click', onClick);
          circle41.key = "NM";
    const circle42 = L.circle([33.83, -81.16], {icon: redIcon}).addTo(map).on('click', onClick);
          circle42.key = "SC";
    const circle43 = L.circle([41.20, -77.19], {icon: redIcon}).addTo(map).on('click', onClick);
          circle43.key = "PA";
    const circle44 = L.circle([34.04, -111.09], {icon: redIcon}).addTo(map).on('click', onClick);
          circle44.key = "AZ";
    const circle45 = L.circle([39.04, -76.64], {icon: redIcon}).addTo(map).on('click', onClick);
          circle45.key = "MD";
    const circle46 = L.circle([42.40, -71.38], {icon: redIcon}).addTo(map).on('click', onClick);
          circle46.key = "MA";
    const circle47 = L.circle([36.77, -119.41], {icon: redIcon}).addTo(map).on('click', onClick);
          circle47.key = "CA";
    const circle48 = L.circle([44.06, -114.74], {icon: redIcon}).addTo(map).on('click', onClick);
          circle48.key = "ID";
    const circle49 = L.circle([43.07, -107.29], {icon: redIcon}).addTo(map).on('click', onClick);
          circle49.key = "WY";
    const circle50 = L.circle([35.78, -80.79], {icon: redIcon}).addTo(map).on('click', onClick);
          circle50.key = "NC";
    const circle51 = L.circle([30.39, -92.32], {icon: redIcon}).addTo(map).on('click', onClick);
          circle51.key = "LA";
}

var addComma = function(num) {
    return (num.toString().split("").reverse()
    .map((digit, index) => 
    index != 0 && index % 3 === 0 ? `${digit},`:digit)
    .reverse()
    .join("")
    );
}

// Process GlobalData for header and set countries OBJ for future clicks
function processGlobalData(result) {
    let globalData = result.Global;
    console.log(globalData);

    let newConfirmed = addComma(globalData.NewConfirmed);
    let totalConfirmed = addComma(globalData.TotalConfirmed);
    // let newRecovered = addComma(globalData.NewRecovered);
    // let totalRecovered = addComma(globalData.TotalRecovered);
    let totalDeaths = addComma(globalData.TotalDeaths);
   
    renderGlobalStats(totalConfirmed, newConfirmed, totalDeaths);
    setCountriesData(result.Countries);
}

// Sets the variable countries for the country marker clicks
function setCountriesData(Countries) {
    Countries.forEach(obj => {
        let countrycode = obj.CountryCode.toLowerCase();
        countries[countrycode]={obj};
    });

    // Loads country markers
    loadCountryMarkers();
    return countries;
}

function countryClick() {
    let countryCode = (this.key);
        // console.log(this.key);
    getHealthNews(countryCode);

        // console.log(countries);
    // points to the data for clicked country
    let countryData = countries[countryCode].obj;
        // console.log(countryData);

    let totalConfirmed = addComma(countryData.TotalConfirmed);
    let newConfirmed = addComma(countryData.NewConfirmed);
    let totalRecovered = addComma(countryData.TotalRecovered);
    let totalDeaths = addComma(countryData.TotalDeaths);

    let popUpStats = `${countryData.Country}<br/>
    Total Confirmed:  ${totalConfirmed}<br/>
    New Confirmed:  ${newConfirmed}<br/>
    Total Recovered:  ${totalRecovered}<br/>
    Total Deaths:  ${totalDeaths} `

    marker1.bindPopup(popUpStats);
    marker2.bindPopup(popUpStats);
    marker3.bindPopup(popUpStats);
    marker4.bindPopup(popUpStats);
    marker5.bindPopup(popUpStats);
    marker6.bindPopup(popUpStats);
    marker7.bindPopup(popUpStats);
    marker8.bindPopup(popUpStats);
    marker9.bindPopup(popUpStats);
    marker10.bindPopup(popUpStats);
    marker11.bindPopup(popUpStats);
    marker12.bindPopup(popUpStats);
    marker13.bindPopup(popUpStats);
    marker14.bindPopup(popUpStats);
}

function renderGlobalStats(conf, newConf, deaths) {
    $('#global-stats').html(
        `Global Confirmed Cases:  ${conf} <br/>
        Global New Cases:  ${newConf} <br/>
        Global Deaths:  ${deaths}`);
}

function renderModals() { }
 
var countsArr = [];
var datesArr = [];
function chartPrep(response, stateParam) {
    // clear the arrays before processing another state in the same session
    countsArr.length = 0;
    datesArr.length = 0;

    // Progress Bar
    $('#progress').html('<progress class="progress is-large is-info" max="100">95%</progress>')
    // filtered data recieved by getStatesConfirmed
    const confCasesArr = response;
    // console.log(response);

    // prep and aggregate dates
    // Prep the dates from the Confirmed Cases Array
    let day = "";
    var count = 0;
    
    response.forEach((obj, index) => {
    // for (let i = 0; i < response.length; i++) {   
        // console.log(index);
        // console.log(obj.date);
        // console.log(obj.confCases);
        // console.log(count);
        if(index === 0) {
            day === obj.date;
            count === obj.confCases;
        }

        if(day === obj.date){
            count += obj.confCases;
        } else {
            function pushInfo(cb){
            datesArr.push(day);
            countsArr.push(count);
            cb();
            }

            pushInfo(function(){
                day = obj.date;
                count = obj.confCases;
            //     console.log(`Reset Day to ${day}`)
            //     console.log(`Reset Count to ${count}`)
            });
        }
    });

    // console.log(datesArr);
    // console.log(countsArr);

    renderStateChart(stateParam);
}

$(document).on('click', "#myChart", function () {

    $('#myChart').attr('style', 'display:none;');
    $('#map').attr('style', 'display:block; opacity: 1; height: 480px;');
});

function renderStateChart(stateLabel) {

    // renders the chart onto the DOM
    var ctx = document.getElementById('myChart');
    $('#map').attr("style", "opacity: 0.5; ");
    $('#progress').attr("style", "display:none;");
    ctx.setAttribute("style", "display:flex;");

    var labelsArr = datesArr;
    var dataArr = countsArr;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsArr,
            datasets: [{
                label: '# of Cases for: ' + stateLabel,
                data: dataArr,
                backgroundColor: "rgba(25, 25, 200, .9)",
                borderColor: [],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    // console.log(myChart);
}
var finalStats = {};
var finalStatsChk = false;

function getStateInfo(st) {
    
    if (finalStatsChk === false){ //Execute ajax call on the first time the US details are requested
    $.ajax({
        url: "https://api.covid19api.com/dayone/country/us/status/confirmed",
        method: "GET"
    }).then(function (response) {
        finalStatsChk = true;
        console.log('===== Entire USA stats ======')
        console.log(response);

        // Progress Bar
        $('#progress').html('<progress class="progress is-large is-info" max="100">75%</progress>');


        // finalStats is the variable container for the data to be charted
        // state is used as the key for finalStats object
        var state;
        var lookUp = {
            "Alaska": "AK", "AK": "AK", "Alabama": "AL", "AL": "AL", "Arizona": "AZ",
            "AZ": "AZ", "Arkansas": "AR", "AR": "AR", "California": "CA", "CA": "CA",
            "Colorado": "CO", "CO": "CO", "Connecticut": "CT", "CT": "CT", "Delaware": "DE",
            "DE": "DE", "District of Columbia": "DC", "DC": "DC", "Florida": "FL",
            "FL": "FL", "Georgia": "GA", "GA": "GA", "Hawaii": "HI", "HI": "HI", "Idaho": "ID",
            "ID": "ID", "Illinois": "IL", "IL": "IL", "Indiana": "IN", "IN": "IN", "Iowa": "IA", "IA": "IA", "Kansas": "KS", "KS": "KS", "Kentucky": "KY", "KY": "KY",
            "Louisiana": "LA", "LA": "LA", "Maine": "ME", "ME": "ME", "Maryland": "MD",
            "MD": "MD", "Massachusetts": "MA", "MA": "MA", "Michigan": "MI", "MI": "MI",
            "Minnesota": "MN", "MN": "MN", "Mississippi": "MS", "MS": "MS", "Missouri": "MO",
            "MO": "MO", "Montana": "MT", "MT": "MT", "Nebraska": "NE", "NE": "NE",
            "Nevada": "NV", "NV": "NV", "New Hampshire": "NH", "NH": "NH", "New Jersey": "NJ",
            "NJ": "NJ", "New Mexico": "NM", "NM": "NM", "New York": "NY", "NY": "NY",
            "North Carolina": "NC", "NC": "NC", "North Dakota": "ND", "ND": "ND",
            "Ohio": "OH", "OH": "OH", "Oklahoma": "OK", "OK": "OK", "Oregon": "OR",
            "OR": "OR", "Pennsylvania": "PA", "PA": "PA", "Rhode Island": "RI",
            "RI": "RI", "South Carolina": "SC", "SC": "SC", "South Dakota": "SD",
            "SD": "SD", "Tennessee": "TN", "TN": "TN", "Texas": "TX", "TX": "TX",
            "Utah": "UT", "UT": "UT", "Vermont": "VT", "VT": "VT", "Virginia": "VA",
            "VA": "VA", "Washington": "WA", "WA": "WA", "West Virginia": "WV", "WV": "WV",
            "Wisconsin": "WI", "WI": "WI", "Wyoming": "WY"
        };

        var stChk = [
            " CA", " IL", " NE", " TX", " AZ", " AR", " WA", " MA", " RI", " WI", " NC", " SC", " NY", " FL", " GA", " NH", " FL", " LA", " PA", " NV", " NJ", " CO", " CT", " HI", "  UT", " OK", " MD", " VA", " IL", " IN", " OH", " D.C.", " TN", " AL", " MO", " MS", " WV", "Colorado", "Florida", "New Jersey", "Oregon", "Texas", "Pennsylvania", "Iowa", "Maryland", "North Carolina", "South Carolina", "Tennessee", "Virginia", "Indiana", "Kentucky", "New York", "District of Columbia", "Nevada", "New Hampshire", "Minnesota", "Nebraska", "Massachusetts", "Ohio", "Rhode Island", "Wisconsin", "Connecticut", "Hawaii", "Oklahoma", "Utah", "Kansas", "Louisiana", "Missouri", "Vermont", "Alaska", "Arkansas", "Delaware", "Idaho", "Maine", "Michigan", "Mississippi", "Montana", "New Mexico", "North Dakota", "South Dakota", "West Virginia", "Wyoming", "Georgia", "Alabama", "Alaska", "Idaho", "Washington", "Illinois"
        ];

        for (i = 0; i < response.length; i++) {
            let dateResp = response[i].Date;
            let casesResp = response[i].Cases;
            let provinceResp = response[i].Province;
            // console.log(`Province Response is: ${provinceResp}`);
            state = lookUp[provinceResp]; // LOOKS UP the 2 digit state code when full state is passed in the data.
            // console.log(`State is: ${state}`)

            // This is the process that pushes the data into an object array that passes to chartPrep
            if (finalStats[state]) {
                var confirmedObj = {
                    date: dateResp.slice(0,10),
                    confCases: casesResp
                };
                // console.log("object of array state " + JSON.stringify(confirmed));
                finalStats[state].push(confirmedObj);

                //push new obj (date and count)
            } else if (dateResp !== undefined && state !== undefined && state !== "") {
                finalStats[state] = [confirmedObj];
            }
        }
    
        // console.log('======= Filtered Stats =============')
        console.log(finalStats[st]);
        // console.log(st)
        chartPrep(finalStats[st], st);
    })
    }
    else{chartPrep(finalStats[st], st)}
}

// Responds to clicks on US State markers
function onClick() {
    var state = (this.key);
    // get US News
    getHealthNews("us");
    // Get State Info for Chart
    // console.log(state);
    getStateInfo(state);
    $('#progress').html('<progress class="progress is-large is-info" max="100">25%</progress>');
}

// News API Query
function getHealthNews(location) {
    var healthQuery = "https://newsapi.org/v2/top-headlines?country=" + location + "&category=health&apiKey=fee4776affce4f0fa44e7bca791fbb01"

    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=" + location + "&category=health&apiKey=fee4776affce4f0fa44e7bca791fbb01",
        method: "GET"
    }).then(function (response) {

        // Clears News DIV when a country query responds
        $("#news-box").empty();
        var articles = response.articles

        // clear news
        var news = [];

        // Sets the news list objects to 10 articles in an array
        for (var i = 0; i < 10; i++) {
            var headlines = {
                headline: articles[i].title,
                link: articles[i].url,
                author: articles[i].author,
                pubSource: articles[i].source.name,
                pubDate: articles[i].publishedAt
            };
            news.push(headlines);
        }
        // console.log(news);
        renderNews(news);
    });
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

getHealthNews("us");
