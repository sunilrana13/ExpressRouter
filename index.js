const hostname = "nodeapp.com";
const port = 3000;
const http = require("http");
const express = require("express");


const dishrouter = require("./routes/dishrouter");
const courserouter = require("./routes/courserouter");
const app = express();


app.use("/dishes", dishrouter);
app.use("/course", courserouter);
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("<H1> This is an Express Router Demo App!!</H1>");
})


const server = http.createServer(app);

server.listen(port, hostname);