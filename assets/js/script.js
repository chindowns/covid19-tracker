function getCovidCountryInfo(loc) {
    var countries = ["us", "italy", "Spain", "China", "Germany", "France", "Iran", "United Kingdom", "Switzerland", "Belgium"];
    var countryPin = "us";
    var queryCountryURL = "https://api.covid19api.com/total/country/" + loc + "/status/confirmed"
    var lastIndex;
    var confirmedCases;
    var confirmedCaseDate;
    $.ajax({
        url: queryCountryURL,
        method: "GET"
    }).then(function(response) {
            //Get the Date and Cases from the last array pulled
            var lastIndex = response.length-1;
            console.log(response[lastIndex]);
            confirmedCases = response[lastIndex].cases;
            confirmedCaseDate = response[67];
            console.log(confirmedCases);

            return confirmedCases;            
    }); 

    }
    
getCovidCountryInfo("us");