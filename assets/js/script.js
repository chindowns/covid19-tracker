// Instantiating the object to contain the data to be passed back to the DOM.


// Each AJAX call to covid19api.com must be in its own function or the response data cannot be returned outside of the AJAx response function.
function getConfirmedTotals(loc) {
    var queryURL = "https://api.covid19api.com/total/country/" + loc + "/status/confirmed";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
            // Pass the information outside of the AJAX Response Function to allow the data to be processed
            processCountryTotals(response, loc, "Confirmed Country Totals");
            console.log("this is LOC   " + loc);
    });
}

function getRecoveredTotals(loc) {
    var queryURL = "https://api.covid19api.com/total/country/" + loc + "/status/recovered";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        processCountryTotals(response, loc, "Recovered Country Totals")
    });
}

function getDeathTotals(loc) {
    var queryURL = "https://api.covid19api.com/total/country/" + loc + "/status/deaths";
    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        processCountryTotals(response, loc, "Death Country Totals");
    });
}
var locCheck;
var countryCntryTotal = "";
var dateCntryTotal = "";
var confCntryTotal = 0;
var recovCntryTotal = 0;
var deathCntryTotal = 0;
function processCountryTotals(arr, loc, param) {
    // console.log(arr);
    
    console.log(loc)
    // if countryCheck === loc parameter then we know the site information is for the same countryCntryTotal otherwise clear the variables.
    if (locCheck !== loc) {
        countryCntryTotal = "";
        dateCntryTotal = "";
        confCntryTotal = 0;
        recovCntryTotal = 0;
        deathCntryTotal = 0;
        // console.log("Clear Variables ran")
    }
    locCheck = loc;

    // Set the variables to be pushed to the pop-up (modal)
    if(param === "Confirmed Country Totals") {
        countryCntryTotal = arr[arr.length - 1].Country;
        dateCntryTotal = arr[arr.length - 1].Date;
        confCntryTotal = arr[arr.length - 1].Cases;
    }

    if(param === "Recovered Country Totals") {
        recovCntryTotal = arr[arr.length - 1].Cases;
    }

    if(param === "Death Country Totals") {
        deathCntryTotal = arr[arr.length - 1].Cases;    
    }



    console.log("On " + dateCntryTotal + " the total cases for " + countryCntryTotal + " are");
    console.log("Confirmed Cases: " + confCntryTotal);
    console.log("Recovered Cases: " + recovCntryTotal);
    console.log("Death Cases " + deathCntryTotal);
}

var usTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths ";
var itTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 
var chTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 
var caTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 
var cnTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 
var deTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 
var frTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 
var gbTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 
var nlTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 
var beTotals = "Confirmed " + confCntryTotal + "Recovered " + recovCntryTotal + "Deaths "; 

var dateFormat = function(){
    // Need to format this dateCntryTotal to be more legible    2020-03-31T00:00:00Z
}
 
function renderModals() {}

var countsArr = [];
var datesArr = [];
function chartPrep(response, stateParam) {
    // filtered data recieved by getStatesConfirmed
    var confCasesArr = response;
    var stateArg = stateParam;
    console.log(response);

    // prep and aggregate dates
    // Prep the dates from the Confirmed Cases Array
    var day = 0;
    var count = 0;
    
    for (var i = 0; i < confCasesArr.length; i++) {
        // iterate through our loop
        //slice the date and add the cases to count
        // if the next date mathes increase count by 1
        // when the date if different push date, count to labels and data
            
        daySlice = confCasesArr[i].date.slice(0,10);
        // Before pushing data into the object chartData
        // Validate that the Array is at a new day and this is not the first iteration.
        // console.log(day +"   " + daySlice)
        if (day !== daySlice && i > 0){
            //if charData[Labels] does exist push data ELSE create it
            datesArr.push(day);
            countsArr.push(count);
            day = 0;
            count = 0;
            console.log("this is push and clear" + day + " " + count);
           
        }
        day = daySlice;
        count = count + confCasesArr[i].confCases;
        // console.log("aggregation " + day + " " + count);
        
        }
        console.log(countsArr);
        console.log(datesArr);
        renderStateChart(stateArg);
        countsArr = [];
        datesArr = [];
    // console.log(confCasesArr)
}

$(document).on('click',"#myChart" , function() {

    $('#myChart').attr('style', 'display:none;');
    // $('#map').attr('style', 'display:flex; height: 480px;');
});

function renderStateChart(stateLabel){
    var stLab = stateLabel;
    console.log("---- datesArr-----");
    console.log(datesArr);
    console.log("---- countsArr----");
    console.log(countsArr);

    // renders the chart onto the DOM
    var ctx = document.getElementById('myChart');
    // var mapEl = document.getElementById('map');

    // mapEl.setAttribute("style", "display:none");
    ctx.setAttribute("style", "display:flex;");
    
    var labelsArr = datesArr;
    var dataArr = countsArr;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsArr, 
            datasets: [{
                label: '# of Cases for: '+ stLab,
                data: dataArr,
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
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
    console.log(myChart);
}


function getStateInfo(st) {
    var queryUsaURL = "https://api.covid19api.com/country/us/status/confirmed";
    
    $.ajax({
        url: queryUsaURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var finalStats = {
                    };
        var state;
        var lookUp = {
            "Alaska": "AK",
            "AK": "AK",
            "Alabama": "AL",
            "AL": "AL",
            "Arizona": "AZ",
            "AZ": "AZ",
            "Arkansas": "AR",
            "AR": "AR",
            "California": "CA",
            "CA": "CA",
            "Colorado": "CO",
            "CO": "CO",
            "Connecticut": "CT",
            "CT": "CT",
            "Delaware": "DE",
            "DE": "DE",
            "District of Columbia": "DC",
            "DC": "DC",
            "Florida": "FL",
            "FL": "FL",
            "Georgia": "GA",
            "GA": "GA",
            "Hawaii": "HI",
            "HI": "HI",
            "Idaho": "ID",
            "ID": "ID",
            "Illinois": "IL",
            "IL": "IL",
            "Indiana": "IN",
            "IN": "IN",
            "Iowa": "IA",
            "IA": "IA",
            "Kansas": "KS",
            "KS": "KS",
            "Kentucky": "KY",
            "KY": "KY",
            "Louisiana": "LA",
            "LA": "LA",
            "Maine":"ME",
            "ME": "ME",
            "Maryland": "MD",
            "MD": "MD", 
            "Massachusetts": "MA",
            "MA": "MA",
            "Michigan": "MI",
            "MI": "MI",
            "Minnesota": "MN",
            "MN": "MN",
            "Mississippi":"MS",
            "MS": "MS",
            "Missouri": "MO",
            "MO": "MO",
            "Montana": "MT",
            "MT": "MT",
            "Nebraska": "NE",
            "NE": "NE",
            "Nevada": "NV",
            "NV": "NV",
            "New Hampshire": "NH",
            "NH": "NH",
            "New Jersey": "NJ",
            "NJ": "NJ",
            "New Mexico": "NM",
            "NM": "NM",
            "New York": "NY",
            "NY": "NY",
            "North Carolina": "NC",
            "NC": "NC",
            "North Dakota": "ND",
            "ND": "ND",
            "Ohio": "OH",
            "OH": "OH",
            "Oklahoma": "OK",
            "OK": "OK",
            "Oregon": "OR",
            "OR": "OR",
            "Pennsylvania": "PA",
            "PA": "PA",
            "Rhode Island": "RI",
            "RI": "RI",
            "South Carolina": "SC",
            "SC": "SC",
            "South Dakota":"SD",
            "SD": "SD",
            "Tennessee": "TN",
            "TN": "TN",
            "Texas": "TX",
            "TX": "TX",
            "Utah": "UT",
            "UT": "UT",
            "Vermont": "VT",
            "VT": "VT",
            "Virginia": "VA",
            "VA": "VA",
            "Washington": "WA",
            "WA": "WA",
            "West Virginia": "WV",
            "WV": "WV",
            "Wisconsin": "WI",
            "WI": "WI",
            "Wyoming": "WY"
        };

    var stChk = [" CA", " IL", " NE", " TX", " AZ", " AR", " WA", " MA", " RI", " WI", " NC", " SC", " NY", " FL", " GA", " NH", " FL", " LA", " PA", " NV", " NJ", " CO", " CT", " HI", " UT", " OK", " MD", " VA", " IL", " IN", " OH", " D.C.", " TN", " AL", " MO", " MS", " WV", "Colorado", "Florida", "New Jersey",  "Oregon",  "Texas",  "Pennsylvania",  "Iowa",  "Maryland", "North Carolina", "South Carolina", "Tennessee", "Virginia", "Indiana", "Kentucky", "New York", "District of Columbia", "Nevada", "New Hampshire", "Minnesota", "Nebraska", "Massachusetts", "Ohio", "Rhode Island", "Wisconsin", "Connecticut", "Hawaii", "Oklahoma", "Utah", "Kansas", "Louisiana", "Missouri", "Vermont", "Alaska", "Arkansas", "Delaware", "Idaho", "Maine", "Michigan", "Mississippi", "Montana", "New Mexico", "North Dakota", "South Dakota", "West Virginia", "Wyoming", "Georgia", "Alabama", "Alaska", "Idaho", "Washington", "Illinois"];      

        for (i = 0; i < response.length; i++) {
            
            // This is the process that cleans and filters the data into states
            var provinceArr = response[i].Province.split(',');
            // only trims element 1 if it exists
            if (provinceArr[1] !== undefined) {
                var province1 = provinceArr[1].trim();
            }

            if (stChk.indexOf(provinceArr[0]) !== -1) {
                state = lookUp[provinceArr[0]];
                if ( state === undefined) {console.log(provinceArr[0])}
                // console.log("province0 state lookup:  " + state);
            
            }else {
                if (province1 !== undefined && province1.length === 2) {
                    state = lookUp[province1];
                    if ( state === undefined) {console.log(provinceArr[1])}
                    // console.log("province1 (2d) state lookup:  " + state);
                }
            }                
         
            // This is the process that pushes the data into an object array that we send the chartPrep
            if(finalStats[state]){
                var confirmed = {
                    date: response[i].Date,
                    confCases: response[i].Cases
                };
                // console.log("object of array state " + JSON.stringify(confirmed));
                finalStats[state].push(confirmed);
                //push new obj (date and count)
            } else if (response[i].Date !== undefined) {
                finalStats[state] = [{date:response[i].Date, confCases:response[i].Cases}] ;
            }
        }
        var filterState = st;
        console.log(filterState);

        console.log(finalStats[filterState]);
        
        chartPrep(finalStats[filterState], filterState);
    
    });
}

// Country query IDs "us", "italy", "spain", "china", "germany", "france", "iran", "united-kingdom", "switzerland", "belgium"
// getConfirmedTotals("us");
// getRecoveredTotals("us");
// getDeathTotals("us");



//var healthQuery = "https://newsapi.org/v2/top-headlines?country=" + country + "&category=health&apiKey=fee4776affce4f0fa44e7bca791fbb01"



var accessToken = 'pk.eyJ1IjoianVsaWV0LWdlb3JnZSIsImEiOiJjazhnOXNzN3gwMXoyM2RxbjNzbXdrYXJjIn0.a653svYKdCmg2wkjY5HxVg';
var map = L.map('map').setView([20,0], 2);

// Add tiles from the Mapbox Static Tiles API
// (https://docs.mapbox.com/api/maps/#static-tiles)
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Responds to clicks on the country markers
function ctryOnClick(e) {
    country = (this.key);
    // Lookup table to convert country code to country for covidAPI
    var lookupCtry = {
        us : "us",
        sp : "spain",
        it : "italy",
        cn : "china",
        de : "germany",
        fr : "france",
        gb : "united-kingdom",
        ch : "switzerland",
        be : "belgium",
        ca : "canada",
        es : "netherland"
    }
    var loc = lookupCtry[country];
    console.log(loc);
    getConfirmedTotals(loc);
    getRecoveredTotals(loc);
    getDeathTotals(loc);

    country = (this.key);
    getHealthNews(country);
}



function onClick(e) {   

//alert(this.key);
country = (this.key) // or location or state
getHealthNews(country)

getStateInfo(country);
console.log(country)
}

var country = "us"

function getHealthNews() {
var healthQuery = "https://newsapi.org/v2/top-headlines?country=" + country + "&category=health&apiKey=fee4776affce4f0fa44e7bca791fbb01"
// console.log(healthQuery)
$.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=" + country + "&category=health&apiKey=fee4776affce4f0fa44e7bca791fbb01",
    method: "GET"
}).then(function (response) {
    // console.log(response)
    $("#news-box").empty();
    var articles = response.articles
    for (var i = 0; i < 10; i++) {
        // console.log(articles[i]);
        var headline = articles[i].title
        var link = articles[i].url
        var author = articles[i].author
        if (author !== null) {
            // console.log(author)
        }
        var pubSource = articles[i].source.name
        var pubDate = articles[i].publishedAt
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

getHealthNews(country)

var marker1 = L.marker([39.0119, -98.4842]).addTo(map).on('click', onClick);; // US
marker1.key = "us";
var popup1;
marker1.bindPopup(usTotals).openPopup();

var marker2 = L.marker([41.9028, 12.4964]).addTo(map).on('click', ctryOnClick); // Italy
marker2.key = "it";
marker2.bindPopup(itTotals).openPopup();

var marker3 = L.marker([52.1326, 5.2913]).addTo(map).on('click', ctryOnClick); // Netherland
marker3.key = "es";
var popup3;
marker3.bindPopup("This is the Transamerica Pyramid").openPopup();

var marker4 = L.marker([35.8617, 104.1954]).addTo(map).on('click', ctryOnClick); //China
marker4.key = "cn";
var popup4;
marker4.bindPopup("This is the Transamerica Pyramid").openPopup();

var marker5 = L.marker([51.1657, 10.4515]).addTo(map).on('click', ctryOnClick); // Germany
marker5.key = "de";
var popup5;
marker5.bindPopup("This is the Transamerica Pyramid").openPopup();

var marker6 = L.marker([46.2276, 2.2137]).addTo(map).on('click', ctryOnClick); // France
marker6.key = "fr"
var popup6;
marker6.bindPopup("This is the Transamerica Pyramid").openPopup();

var marker7 = L.marker([56.1304, -106.3468]).addTo(map).on('click', ctryOnClick); // Canada
marker7.key = "ca"
var popup7;
marker7.bindPopup("This is the Transamerica Pyramid").openPopup();

var marker8 = L.marker([55.3781, -3.4360]).addTo(map).on('click', ctryOnClick); // United Kingdom
marker8.key = "gb"
var popup8;
marker8.bindPopup("This is the Transamerica Pyramid").openPopup();

var marker9 = L.marker([46.8182, 8.2275]).addTo(map).on('click', ctryOnClick); // Switzerland
marker9.key = "ch"
var popup9;
marker9.bindPopup("This is the Transamerica Pyramid").openPopup();

var marker10 = L.marker([50.5039, 4.4699]).addTo(map).on('click', ctryOnClick); // Belgium
marker10.key = "be" 
var popup10;
marker10.bindPopup("This is the Transamerica Pyramid").openPopup();

var circle1 = L.circle([37.786542, -122.386022], {
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 50.0
}).addTo(map);   




var circle2 = L.circle([44.50, -89.50], {radius: 200}).addTo(map).on('click', onClick);;; //Wisconsin, the USA
circle2.key = "WI"


var circle3 = L.circle([39.00, -80.50], {radius: 200}).addTo(map).on('click', onClick);; //West Virginia, the US

circle3.key = "WV"

var circle4 = L.circle([44.0, -72.69], {radius: 200}).addTo(map).on('click', onClick);; //Vermont, the USA

circle4.key = "VT"


var circle5 = L.circle([31.00, -100.00], {radius: 200}).addTo(map).on('click', onClick);; //Texas, the USA

circle5.key = "TX"


var circle6 = L.circle([44.50, -100], {radius: 200}).addTo(map).on('click', onClick);; //South Dakota, the US

circle6.key = "ND"

var circle7 = L.circle([41.70, -71.50], {radius: 200}).addTo(map).on('click', onClick);; //Rhode Island, the US
circle7.key = "RI"


var circle8 = L.circle([44.00, -120.50], {radius: 200}).addTo(map).on('click', onClick);; //Oregon, the US

circle8.key = "OR"

var circle9 = L.circle([43.00, -75.00], {radius: 200}).addTo(map).on('click', onClick);; //New York, the US

circle9.key = "NY"

var circle10 = L.circle([44.00, -71.50], {radius: 200}).addTo(map).on('click', onClick);;

circle10.marker = "NH"
var circle11 = L.circle([41.50, -100.00], {radius: 200}).addTo(map).on('click', onClick);;
circle11.key = "NE"

var circle12 = L.circle([38.50, -98.00], {radius: 200}).addTo(map).on('click', onClick);;
circle12.key = "KS"

var circle13 = L.circle([33.00, -90.00], {radius: 200}).addTo(map).on('click', onClick);;

circle13.key = "MS"

var circle14 = L.circle([40.00, -89.00], {radius: 200}).addTo(map).on('click', onClick);;

circle14.key = "IL"

var circle15 = L.circle([39.00, -75.50], {radius: 200}).addTo(map).on('click', onClick);;

circle15.key = "DE"

var circle16 = L.circle([41.59, -72.69], {radius: 200}).addTo(map).on('click', onClick);;

circle16.key = "CT"

var circle17 = L.circle([34.79, -92.19], {radius: 200}).addTo(map).on('click', onClick);;

circle17.key = "AR"

var circle18 = L.circle([40.27, -86.12], {radius: 200}).addTo(map).on('click', onClick);;

circle18.key = "IN"

var circle19 = L.circle([38.57, -92.60], {radius: 200}).addTo(map).on('click', onClick);;

circle19.key = "MO"

var circle20 = L.circle([27.99, -81.76], {radius: 200}).addTo(map).on('click', onClick);;

circle20.key = "FL"

var circle21 = L.circle([39.87, -117.22], {radius: 200}).addTo(map).on('click', onClick);;
circle21.key = "NV"

var circle22 = L.circle([45.36, -68.97], {radius: 200}).addTo(map).on('click', onClick);;
circle22.key = "ME"

var circle23 = L.circle([44.18, -84.50], {radius: 200}).addTo(map).on('click', onClick);;

circle23.key = "MI"

var circle24 = L.circle([33.24, -83.44], {radius: 200}).addTo(map).on('click', onClick);;

circle24.key = "GA"


var circle23 = L.circle([44.18, -84.50], {radius: 200}).addTo(map).on('click', onClick);;

circle23.key = "MI"

var circle24 = L.circle([33.24, -83.44], {radius: 200}).addTo(map).on('click', onClick);;

circle24.key = "GA"

var circle25 = L.circle([19.74, -155.84], {radius: 200}).addTo(map).on('click', onClick);;

circle25.key = "HI"

var circle26 = L.circle([66.16, -153.36], {radius: 200}).addTo(map).on('click', onClick);;

circle26.key = "AK"
var circle25 = L.circle([19.74, -155.84], {radius: 200}).addTo(map).on('click', onClick);;

circle25.key = "HI"

var circle26 = L.circle([66.16, -153.36], {radius: 200}).addTo(map).on('click', onClick);;

circle26.key = "AK"

var circle27 = L.circle([35.86, -86.66], {radius: 200}).addTo(map).on('click', onClick);;

circle27.key = "TN"

var circle28 = L.circle([37.92, -78.02], {radius: 200}).addTo(map).on('click', onClick);;

circle28.key = "VA"

var circle29 = L.circle([39.83, -74.87], {radius: 200}).addTo(map).on('click', onClick);;

circle29.key = "NJ"

var circle30 = L.circle([37.83, -84.27], {radius: 200}).addTo(map).on('click', onClick);;

circle30.key = "KY"

var circle31 = L.circle([47.65, -100.43], {radius: 200}).addTo(map).on('click', onClick);;

circle31.key = "ND"

var circle32 = L.circle([46.39, -94.63], {radius: 200}).addTo(map).on('click', onClick);;

circle32.key = "MN"

var circle33 = L.circle([36.08, -96.92], {radius: 200}).addTo(map).on('click', onClick);;

circle33.key = "OK"

var circle34 = L.circle([46.96, -109.53], {radius: 200}).addTo(map).on('click', onClick);;

circle34.key = "MT"

var circle35 = L.circle([47.75, -120.74], {radius: 200}).addTo(map).on('click', onClick);;

circle35.key = "WA"

var circle36 = L.circle([39.41, -111.95], {radius: 200}).addTo(map).on('click', onClick);;

circle36.key = "UT"

var circle37 = L.circle([39.11, -105.35], {radius: 200}).addTo(map).on('click', onClick);;

circle37.key = "CO"

var circle38 = L.circle([40.36, -82.99], {radius: 200}).addTo(map).on('click', onClick);;

circle38.key = "OH"

var circle39 = L.circle([32.31, -86.90], {radius: 200}).addTo(map).on('click', onClick);;

circle39.key = "AL"

var circle40 = L.circle([42.03, -93.58], {radius: 200}).addTo(map).on('click', onClick);;

circle40.key = "IA"

var circle41 = L.circle([34.30, -106.01], {radius: 200}).addTo(map).on('click', onClick);;

circle41.key = "NM"

var circle42 = L.circle([33.83, -81.16], {radius: 200}).addTo(map).on('click', onClick);;

circle42.key = "SC"

var circle43 = L.circle([41.20, -77.19], {radius: 200}).addTo(map).on('click', onClick);;

circle43.key = "PA"

var circle44 = L.circle([34.04, -111.09], {radius: 200}).addTo(map).on('click', onClick);;

circle44.key = "AZ"

var circle45 = L.circle([39.04, -76.64], {radius: 200}).addTo(map).on('click', onClick);;

circle45.key = "MD"

var circle46 = L.circle([42.40, -71.38], {radius: 200}).addTo(map).on('click', onClick);;

circle46.key = "MA"

var circle47 = L.circle([36.77, -119.41], {radius: 200}).addTo(map).on('click', onClick);;

circle47.key = "CA"

var circle48 = L.circle([44.06, -114.74], {radius: 200}).addTo(map).on('click', onClick);;

circle48.key = "ID"

var circle49 = L.circle([43.07, -107.29], {radius: 200}).addTo(map).on('click', onClick);;

circle49.key = "WY"

var circle50 = L.circle([35.78, -80.79], {radius: 200}).addTo(map).on('click', onClick);;

circle50.key = "NC"

var circle51 = L.circle([30.39, -92.32], {radius: 200}).addTo(map).on('click', onClick);;

circle51.key = "LA"
var circle27 = L.circle([35.86, -86.66], {radius: 200}).addTo(map).on('click', onClick);;

circle27.key = "TN"

var circle28 = L.circle([37.92, -78.02], {radius: 200}).addTo(map).on('click', onClick);;

circle28.key = "VA"

var circle29 = L.circle([39.83, -74.87], {radius: 200}).addTo(map).on('click', onClick);;

circle29.key = "NJ"

var circle30 = L.circle([37.83, -84.27], {radius: 200}).addTo(map).on('click', onClick);;

circle30.key = "KY"

var circle31 = L.circle([47.65, -100.43], {radius: 200}).addTo(map).on('click', onClick);;

circle31.key = "ND"

var circle32 = L.circle([46.39, -94.63], {radius: 200}).addTo(map).on('click', onClick);;

circle32.key = "MN"

var circle33 = L.circle([36.08, -96.92], {radius: 200}).addTo(map).on('click', onClick);;

circle33.key = "OK"

var circle34 = L.circle([46.96, -109.53], {radius: 200}).addTo(map).on('click', onClick);;

circle34.key = "MT"

var circle35 = L.circle([47.75, -120.74], {radius: 200}).addTo(map).on('click', onClick);;

circle35.key = "WA"

var circle36 = L.circle([39.41, -111.95], {radius: 200}).addTo(map).on('click', onClick);;

circle36.key = "UT"

var circle37 = L.circle([39.11, -105.35], {radius: 200}).addTo(map).on('click', onClick);;

circle37.key = "CO"

var circle38 = L.circle([40.36, -82.99], {radius: 200}).addTo(map).on('click', onClick);;

circle38.key = "OH"

var circle39 = L.circle([32.31, -86.90], {radius: 200}).addTo(map).on('click', onClick);;

circle39.key = "AL"

var circle40 = L.circle([42.03, -93.58], {radius: 200}).addTo(map).on('click', onClick);;

circle40.key = "IA"

var circle41 = L.circle([34.30, -106.01], {radius: 200}).addTo(map).on('click', onClick);;

circle41.key = "NM"

var circle42 = L.circle([33.83, -81.16], {radius: 200}).addTo(map).on('click', onClick);;

circle42.key = "SC"

var circle43 = L.circle([41.20, -77.19], {radius: 200}).addTo(map).on('click', onClick);;

circle43.key = "PA"

var circle44 = L.circle([34.04, -111.09], {radius: 200}).addTo(map).on('click', onClick);;

circle44.key = "AZ"

var circle45 = L.circle([39.04, -76.64], {radius: 200}).addTo(map).on('click', onClick);;

circle45.key = "MD"

var circle46 = L.circle([42.40, -71.38], {radius: 200}).addTo(map).on('click', onClick);;

circle46.key = "MA"

var circle47 = L.circle([36.77, -119.41], {radius: 200}).addTo(map).on('click', onClick);;

circle47.key = "CA"

var circle48 = L.circle([44.06, -114.74], {radius: 200}).addTo(map).on('click', onClick);;

circle48.key = "ID"

var circle49 = L.circle([43.07, -107.29], {radius: 200}).addTo(map).on('click', onClick);;

circle49.key = "WY"

var circle50 = L.circle([35.78, -80.79], {radius: 200}).addTo(map).on('click', onClick);;

circle50.key = "NC"

var circle51 = L.circle([30.39, -92.32], {radius: 200}).addTo(map).on('click', onClick);;

circle51.key = "LA"



