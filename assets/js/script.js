// Instantiating the object to contain the data to be passed back to the DOM.


// Each AJAX call to covid19api.com must be in its own function or the response data cannot be returned outside of the AJAx response function.
function getConfirmedTotals(loc) {
    var queryConfirmedURL = "https://api.covid19api.com/total/country/" + loc + "/status/confirmed";
    $.ajax({
        url: queryConfirmedURL,
        method: "GET"
    }).then(function(response){
            // Pass the information outside of the AJAX Response Function to allow the data to be processed
            processCountryTotals(response, "ConfirmedCountryTotals");
    });
}

function getRecoveredTotals(loc) {
    
}

function processCountryTotals(arr, param) {
    console.log(arr);
    if(param === "ConfirmedCountryTotals") {
        countryTotals = {
        name: arr[arr.length - 1].Country,
        date: arr[arr.length - 1].Date,
        confirmed: arr[arr.length - 1].Cases,
        recovered: 0,
        deaths: 0
        };
    }
    console.log(countryTotals);
    return countryTotals;
}


    var queryConfirmedURL = "https://api.covid19api.com/total/country/" + loc + "/status/confirmed";
    $.ajax({
        url: queryConfirmedURL,
        method: "GET"
    }).then(function(response){
        var confirmed = response;
        var arrayLastEl=confirmed[confirmed.length - 1];
        var country = {
            name : arrayLastEl.Country,
            date : arrayLastEl.Date,
            confirmed : arrayLastEl.Cases,
        } 
        console.log(country);
        return country;
    });
    console.log(country);

//     var queryRecoveredURL = "https://api.covid19api.com/total/country/"+ loc + "/status/recovered";
//     $.ajax({
//         url: queryRecoveredURL,
//         method: "GET"
//     }).then(function(response){
//         var recovered = response;
//         var arrayLastEl = recovered
//         console.log("recovered ========== ");
//         console.log(recovered);

//     });

//     var queryDeathsURL = "https://api.covid19api.com/total/country/"+ loc + "/status/deaths";
//     $.ajax({
//         url: queryDeathsURL,
//         method: "GET"
//     }).then(function(response){
//         var deaths = response;
//         console.log("deaths ========== ");
//         console.log(deaths);
//     });
   
// } 



// Country query IDs "us", "italy", "spain", "china", "germany", "france", "iran", "united-kingdom", "switzerland", "belgium"
getConfirmedTotals("us");