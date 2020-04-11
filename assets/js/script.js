// Renders the map on the page
var accessToken = 'pk.eyJ1IjoianVsaWV0LWdlb3JnZSIsImEiOiJjazhnOXNzN3gwMXoyM2RxbjNzbXdrYXJjIn0.a653svYKdCmg2wkjY5HxVg';
var map = L.map('map').setView([30, -40], 3);

// Add tiles from the Mapbox Static Tiles API
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
        tileSize: 512, zoomOffset: -1,
    attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// PIN MARKERS on the countries that provide PopUp on Country Totals
var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

var marker1 = L.marker([39.0119, -98.4842], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // US
marker1.key = "us";

var marker2 = L.marker([41.9028, 12.4964], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // Italy
marker2.key = "it";

var marker3 = L.marker([52.1326, 5.2913], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // Netherland
marker3.key = "nl";

var marker4 = L.marker([35.8617, 104.1954], {icon: redIcon}).addTo(map).on('click', ctryOnClick); //China
marker4.key = "cn";

var marker5 = L.marker([51.1657, 10.4515], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // Germany
marker5.key = "de";

var marker6 = L.marker([46.2276, 2.2137], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // France
marker6.key = "fr";

var marker7 = L.marker([56.1304, -106.3468], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // Canada
marker7.key = "ca";

var marker8 = L.marker([55.3781, -3.4360], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // United Kingdom
marker8.key = "gb";

var marker9 = L.marker([46.8182, 8.2275], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // Switzerland
marker9.key = "ch";

var marker10 = L.marker([50.5039, 4.4699], {icon: redIcon}).addTo(map).on('click', ctryOnClick); // Belgium
marker10.key = "be";

// MARKERS placed on the states to pull up the US Totals
var circle1 = L.circle([37.786542, -122.386022], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);

var circle2 = L.circle([44.50, -89.50], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle2.key = "WI";

var circle3 = L.circle([39.00, -80.50], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle3.key = "WV";

var circle4 = L.circle([44.0, -72.69], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle4.key = "VT";

var circle5 = L.circle([31.00, -100.00], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle5.key = "TX";

var circle6 = L.circle([44.50, -100], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle6.key = "ND";

var circle7 = L.circle([41.70, -71.50], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle7.key = "RI";

var circle8 = L.circle([44.00, -120.50], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle8.key = "OR";

var circle9 = L.circle([43.00, -75.00], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle9.key = "NY";

var circle10 = L.circle([44.00, -71.50], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle10.marker = "NH";

var circle11 = L.circle([41.50, -100.00], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle11.key = "NE";

var circle12 = L.circle([38.50, -98.00], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle12.key = "KS";

var circle13 = L.circle([33.00, -90.00], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle13.key = "MS";

var circle14 = L.circle([40.00, -89.00], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle14.key = "IL";

var circle15 = L.circle([39.00, -75.50], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle15.key = "DE";

var circle16 = L.circle([41.59, -72.69], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle16.key = "CT";

var circle17 = L.circle([34.79, -92.19], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle17.key = "AR";

var circle18 = L.circle([40.27, -86.12], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle18.key = "IN";

var circle19 = L.circle([38.57, -92.60], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle19.key = "MO";

var circle20 = L.circle([27.99, -81.76], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle20.key = "FL";

var circle21 = L.circle([39.87, -117.22], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle21.key = "NV";

var circle22 = L.circle([45.36, -68.97], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle22.key = "ME";

var circle23 = L.circle([44.18, -84.50], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle23.key = "MI";

var circle24 = L.circle([33.24, -83.44], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle24.key = "GA";

var circle23 = L.circle([44.18, -84.50], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle23.key = "MI";

var circle24 = L.circle([33.24, -83.44], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle24.key = "GA";

var circle25 = L.circle([19.74, -155.84], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle25.key = "HI";

var circle26 = L.circle([66.16, -153.36], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle26.key = "AK";

var circle25 = L.circle([19.74, -155.84], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle25.key = "HI";

var circle26 = L.circle([66.16, -153.36], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle26.key = "AK";

var circle27 = L.circle([35.86, -86.66], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle27.key = "TN";

var circle28 = L.circle([37.92, -78.02], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle28.key = "VA";

var circle29 = L.circle([39.83, -74.87], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle29.key = "NJ";

var circle30 = L.circle([37.83, -84.27], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle30.key = "KY";

var circle31 = L.circle([47.65, -100.43], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle31.key = "ND";

var circle32 = L.circle([46.39, -94.63], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle32.key = "MN";

var circle33 = L.circle([36.08, -96.92], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle33.key = "OK";

var circle34 = L.circle([46.96, -109.53], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle34.key = "MT";

var circle35 = L.circle([47.75, -120.74], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle35.key = "WA";

var circle36 = L.circle([39.41, -111.95], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle36.key = "UT";

var circle37 = L.circle([39.11, -105.35], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle37.key = "CO";

var circle38 = L.circle([40.36, -82.99], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle38.key = "OH";

var circle39 = L.circle([32.31, -86.90], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle39.key = "AL";

var circle40 = L.circle([42.03, -93.58], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle40.key = "IA";

var circle41 = L.circle([34.30, -106.01], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle41.key = "NM";

var circle42 = L.circle([33.83, -81.16], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle42.key = "SC";

var circle43 = L.circle([41.20, -77.19], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle43.key = "PA";

var circle44 = L.circle([34.04, -111.09], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle44.key = "AZ";

var circle45 = L.circle([39.04, -76.64], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle45.key = "MD";

var circle46 = L.circle([42.40, -71.38], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle46.key = "MA";

var circle47 = L.circle([36.77, -119.41], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle47.key = "CA";

var circle48 = L.circle([44.06, -114.74], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle48.key = "ID";

var circle49 = L.circle([43.07, -107.29], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle49.key = "WY";

var circle50 = L.circle([35.78, -80.79], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle50.key = "NC";

var circle51 = L.circle([30.39, -92.32], {color: 'red', fillColor: '#ffd104', radius: 50000}).addTo(map).on('click', onClick);
circle51.key = "LA";

// Each AJAX call to covid19api.com must be in its own function or the 
// response data cannot be returned outside of the AJAx response function.
function getConfirmedTotals(loc) {
    var queryURL = "https://api.covid19api.com/total/country/" + loc + "/status/confirmed";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Pass the information outside of the AJAX Response Function to allow the data to be processed
        processCountryTotals(response, loc, "Confirmed Country Totals");
        // console.log("this is LOC   " + loc);
    });
}

function getRecoveredTotals(loc) {
    var queryURL = "https://api.covid19api.com/total/country/" + loc + "/status/recovered";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        processCountryTotals(response, loc, "Recovered Country Totals")
        console.log(response);
    });
}

function getDeathTotals(loc) {
    var queryURL = "https://api.covid19api.com/total/country/" + loc + "/status/deaths";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
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
    if (param === "Confirmed Country Totals") {
        countryCntryTotal = arr[arr.length - 1].Country;
        dateCntryTotal = arr[arr.length - 1].Date;
        confCntryTotal = arr[arr.length - 1].Cases;
    }

    if (param === "Recovered Country Totals") {
        recovCntryTotal = arr[arr.length - 1].Cases;
    }

    if (param === "Death Country Totals") {
        deathCntryTotal = arr[arr.length - 1].Cases;
    }

    renderCtryCases();
}

function renderCtryCases() {
    var popUpStats = "<b>" + countryCntryTotal + "</b>" + "<br />Confirmed " + confCntryTotal + "<br />Recovered "
        + recovCntryTotal + "<br/>Deaths " + deathCntryTotal;

    console.log(`PopUp Stats
                ${popUpStats}`);

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
}

function renderModals() { }

var countsArr = [];
var datesArr = [];
function chartPrep(response, stateParam) {

    // Progress Bar
    $('#progress').html('<progress class="progress is-large is-info" max="100">95%</progress>')

    // filtered data recieved by getStatesConfirmed
    var confCasesArr = response;
    // console.log(response);

    // prep and aggregate dates
    // Prep the dates from the Confirmed Cases Array
    var day = 0;
    var count = 0;
console.log(confCasesArr);
    for (var i = 0; i < confCasesArr.length; i++) {
        // iterate through our loop
        //slice the date and add the cases to count
        // if the next date mathes increase count by 1
        // when the date if different push date, count to labels and data

        daySlice = confCasesArr[i].date.slice(0, 10);
console.log(daySlice);
        // Before pushing data into the object chartData
        // Validate that the Array is at a new day and this is not the first iteration.
        // console.log(day +"   " + daySlice)
        if (day !== daySlice && i > 0) {
            //if charData[Labels] does exist push data ELSE create it
console.log(day);
console.log(count);
            datesArr.push(day);
            countsArr.push(count);
            day = 0;
            count = 0;
            // console.log("this is push and clear" + day + " " + count);
        }
        day = daySlice;
        count = count + confCasesArr[i].confCases;
    }

    renderStateChart(stateParam);
    countsArr = [];
    datesArr = [];
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

function getStateInfo(st) {
    var queryUsaURL = "https://api.covid19api.com/country/us/status/confirmed";

    $.ajax({
        url: queryUsaURL,
        method: "GET"
    }).then(function (response) {
        console.log('===== Entire USA stats ======')
        console.log(response);

        // Progress Bar
        $('#progress').html('<progress class="progress is-large is-info" max="100">75%</progress>');


        // finalStats is the variable container for the data to be charted
        var finalStats = {
        };
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
            // This is the process that cleans and filters the data into states
            // var provinceArr = response[i].Province.split(',');
            // only trims element 1 if it exists
            // if (provinceArr[1] !== undefined) {
            //     var province1 = provinceArr[1].trim();
            // }

            // if (stChk.indexOf(provinceArr[0]) !== -1) {
                state = lookUp[provinceResp];
                // if (state === undefined) { console.log(provinceArr[0]) }
                // console.log("province0 state lookup:  " + state);

            // } else {
            //     if (province1 !== undefined && province1.length === 2) {
            //         state = lookUp[province1];
            //         if (state === undefined) { console.log(provinceArr[1]) }
            //         // console.log("province1 (2d) state lookup:  " + state);
            //     }
            // }

            // This is the process that pushes the data into an object array that passes to chartPrep
            if (finalStats[state]) {
                var confirmed = {
                    date: dateResp,
                    confCases: casesResp
                };
                // console.log("object of array state " + JSON.stringify(confirmed));
                finalStats[state].push(confirmed);

                //push new obj (date and count)
            } else if (dateResp !== undefined) {
                finalStats[state] = [confirmed];
            }
        }
        console.log('======= Filtered Stats =============')
        console.log(finalStats[st])
        chartPrep(finalStats[st], st);
    });
}


// Responds to clicks on the country markers
function ctryOnClick() {
    let country = (this.key);
    console.log(`This is the country key clicked = ${country}`)
    // Lookup table to convert country code to country for covidAPI
    const lookupCtry = {
        us: "us",
        sp: "spain",
        it: "italy",
        cn: "china",
        de: "germany",
        fr: "france",
        gb: "united-kingdom",
        ch: "switzerland",
        be: "belgium",
        ca: "canada",
        nl: "netherlands"
    }
    // country = (this.key);
    let loc = lookupCtry[country];

    // Get country data
    getConfirmedTotals(loc);
    getRecoveredTotals(loc);
    getDeathTotals(loc);

    // get country news
    getHealthNews(country);
}

// Responds to clicks on US State markers
function onClick() {
    var state = (this.key);
    // get US News
    getHealthNews("us");
    // Get State Info for Chart
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
