const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


module.exports = function (router) {
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

}
