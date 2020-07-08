const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3100;

// Define middleware here
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});