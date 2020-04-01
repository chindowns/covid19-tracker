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
    });
}

function getrecovCntryTotals(loc) {
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

var dateFormat = function(){
    // Need to format this dateCntryTotal to be more legible    2020-03-31T00:00:00Z
}
 
function chartStateConfirmed(response) {
    var confirmedCases = response;
    console.log(confirmedCases);


}

function getStateConfirmed() {
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
            

            var provinceArr = response[i].Province.split(',');
            // only trims element 1 if it exists
            if (provinceArr[1] !== undefined) {
                var province1 = provinceArr[1].trim();
            }

            if (stChk.indexOf(provinceArr[0]) !== -1) {
                state = lookUp[provinceArr[0]];
                if ( state === undefined) {console.log(provinceArr[0])}
                console.log("province0 state lookup:  " + state);
            
            }else {
                if (province1 !== undefined && province1.length === 2) {
                    state = lookUp[province1];
                    if ( state === undefined) {console.log(provinceArr[1])}
                    console.log("province1 (2d) state lookup:  " + state);
                }
            }                
         

            if(finalStats[state]){
                var confirmed = {
                    date: response[i].Date,
                    confCases: response[i].Cases
                };
                console.log("object of array state " + JSON.stringify(confirmed));
                finalStats[state].push(confirmed);
                //push new obj (date and count)
            } else if (response[i].Date !== undefined) {
                finalStats[state] = [{date:response[i].Date, confCases:response[i].Cases}] ;
            }
        }
            console.log (finalStats);



            // console.log(statesListArr);
        
        // console.log(statesListArr);


        // chartStateConfirmed(response);
    
    });
}

// Country query IDs "us", "italy", "spain", "china", "germany", "france", "iran", "united-kingdom", "switzerland", "belgium"
// getConfirmedTotals("us");
// getrecovCntryTotals("us");
// getDeathTotals("us");
getStateConfirmed();


