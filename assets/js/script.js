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
        // console.log(response);
        var respArrLength = response.length;
        var statesListArr = [];
        for (i = 0; i < response.length; i++) {
            // console.log[response[i].Province)
            var provinceArr = response[i].Province.split(',');
            var state = provinceArr[0];
            var st = ["CA", "IL", "NE", "TX", "AZ", "AR", "WA", "MA", "RI", "WI", "NC", "SC", "NY", "FL", "GA", "NH", "FL", "LA", "PA", "NV", "NJ", "CO", "CT", "HI", "UT", "OK", "MD", "VA", "IL", "IN", "OH", "D.C.", "TN", "AL", "MO", "MS", "WV"]
            if (provinceArr[1] !== null || provinceArr[1] !== ""){
                // if Province (state) is not in the StateListArr push it there
                if(!statesListArr.includes(state)){
                    // Before putting Province in StateListArr, need to make sure Province[0] is not a city or county and state is in Province[1]
                    if (st.includes(provinceArr[1])){
                        statesListArr.push(provinceArr[1]);
                    }else {statesListArr.push(state);
                    }
                }
            }

            console.log(statesListArr);
        }
        console.log(statesListArr);


        chartStateConfirmed(response);
    });
}

// Country query IDs "us", "italy", "spain", "china", "germany", "france", "iran", "united-kingdom", "switzerland", "belgium"
// getConfirmedTotals("us");
// getrecovCntryTotals("us");
// getDeathTotals("us");
getStateConfirmed();
