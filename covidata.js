const axios = require('axios');
const fs = require('fs');
 
// Make a request for a user with a given ID
axios.get('https://api.covid19api.com/summary')
  .then(function (response) {
    fs.writeFileSync('./countrydata.txt');
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });