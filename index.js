const hostname = "nodeapp.com";
const port = 3000;
const http = require("http");
const express = require("express");
const dishrouter = require("./routes/dishrouter");
const courserouter = require("./routes/courserouter");
const app = express();

app.use(express.static(__dirname + "/public"));

//app.all("/dishes", (req, res, next) => {
//    res.statusCode = 200;
//    res.setHeader("content-type", "text/html");
//    next();
//})
//app.get("/dishes", (req, res, next) => {
//    res.end("get request received and responded!!");
//});
//app.post("/dishes", (req, res, next) => {
//    res.end("post request received and responded!!");
//});

app.use("/dishes", dishrouter);
app.use("/course", courserouter);

const server = http.createServer(app);

server.listen(port, hostname);