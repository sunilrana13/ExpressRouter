const express = require("express");
const bodyparser = require("body-parser");

const router = express.Router();
router.use(bodyparser.json());

router.route('/').
all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    next();
}).
get((req, res, next) => {
    res.end("get request received and responded -- all dishes!!");
}).
post((req, res, next) => {
    res.end("post request received and responded -- dish: "+ req.body.name+"description: "+ req.body.description);
}).
    put((req, res, next) => {
        res.stat = 403;
        res.end("put request received and responded -- Put operation not supported!!");
}).
delete((req, res, next) => {
    res.end("delete request received and responded -- -- All dishes deleted!!");
});

router.route('/:dishid').
    all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        next();
    }).
    get((req, res, next) => {
        res.end("get request received and responded for dishid= " + req.params.dishid);
    }).
    post((req, res, next) => {
        res.stat = 403;
        res.end("post request received and responded -- Post operation not supported!!");
    }).
    put((req, res, next) => {
        res.end("put request received and responded -- dishid= " + req.params.dishid + " dish: " + req.body.name + " description: " + req.body.description);
    }).
    delete((req, res, next) => {
        res.end("delete request received and responded for dishid= " + req.params.dishid);
    });
module.exports = router;