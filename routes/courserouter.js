const express = require("express");
const router = express.Router();
router.route("/").
    all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        next();
    }).
    get((req, res, next) => {
        res.end("get request received and responded for course");
    }).
    post((req, res, next) => {
        res.end("post request received and responded for course");
    });
module.exports = router;