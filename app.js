const express = require("express");
const mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./routes")