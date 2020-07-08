const router = require("express").Router();
const axios = require("axios");
 

module.exports = (router) => {
    router.route("/countries")
        .get("https://api.covide19api.com/summary")
        .then(countryData => {
            res.json(countryData);
        });
}