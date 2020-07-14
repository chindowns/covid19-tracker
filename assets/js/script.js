// define global variables
let countries = {};
var confirmedStats = {};

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

// Get daily stats by state for the trending chart
fetch("https://api.covid19api.com/dayone/country/united-states/status/confirmed", requestOptions)
    .then(response => response.json())
    .then(result => setconfirmedStats(result))
    .catch(error => console.log("Failed to get State data: ", error));

// TESTING DATA
// var statesInfo = [];
// $.getJSON("USstateResponse.json", function(json) {
//     statesInfo = json;
//     console.log(json);
//     setconfirmedStats(statesInfo);
// })

// Get Summary Data for all Countries
fetch("https://api.covid19api.com/summary", requestOptions)
    .then(response => response.json())
    .then(result => processGlobalData(result))
    .catch(error => console.log("Failed to get summary data: ", error));

// TESTING DATA
// $.getJSON("globalResponse.json", json => processGlobalData(json))


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
    // console.log(globalData);

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
    console.log(Countries);
    Countries.forEach(obj => {
        let countryID = obj.Slug;
        countries[countryID]={obj};
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
    Total Confirmed: &nbsp ${totalConfirmed}<br/>
    New Confirmed: &nbsp ${newConfirmed}<br/>
    Total Recovered: &nbsp ${totalRecovered}<br/>
    Total Deaths: &nbsp ${totalDeaths} `

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
       `Global Confirmed Cases: &nbsp ${conf} <br/>
        Global New Cases: &nbsp ${newConf} <br/>
        Global Deaths: &nbsp ${deaths}`);
}

// Clears the chart from displaying
$(document).on('click', "#myChart", function () {

    $('#myChart').attr('style', 'display:none;');
    $('#map').attr('style', 'display:block; opacity: 1; height: 480px;');
});

function setconfirmedStats(statesApiData){
    let unreported = 0;
    let state = null;
    const lookUp = {
        "Alaska": "AK", "Alabama": "AL", "Arizona": "AZ", "Arkansas": "AR", "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
        "District of Columbia": "DC","Florida": "FL","Georgia": "GA","Hawaii": "HI","Idaho": "ID","Illinois": "IL", "IL": "IL", "Indiana": "IN", "IN": "IN", "Iowa": "IA", "Kansas": "KS","Kentucky": "KY", "Louisiana": "LA","Maine": "ME","Maryland": "MD","Massachusetts": "MA", "MA": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO","Montana": "MT","Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH","New Jersey": "NJ","New Mexico": "NM","New York": "NY","North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK", "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD","Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"
    };

    statesApiData.forEach(report =>{
        let state = lookUp[report.Province];
        let date = report.Date;
        let cases = report.Cases;
        let dailyReport = {
            date: date.slice(0,10),
            confirmed: cases
        };
        if(report.Province === ""){
            unreported + +report.Cases;
        }
        else {
            confirmedStats[state] ?        
            confirmedStats[state].push(dailyReport) :
            confirmedStats[state]=[dailyReport]
        }        
    })
    console.log(`Unreported: ${unreported}`)
    loadStateMarkers();
}


// Responds to clicks on US State markers
function onClick() {
    var state = (this.key);
    // get US News
    getHealthNews("us");
    // Get State Info for Chart
    console.log(`clicked state: ${state}`);
    chartPrep(state);
}

getHealthNews("united-states");
