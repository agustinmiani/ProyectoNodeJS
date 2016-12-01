var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
    var date = new Date();
    res.end(date.toDateString());
});

server.listen(3000);
