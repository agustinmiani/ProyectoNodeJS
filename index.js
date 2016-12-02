var fs = require('fs');
var http = require("http");
var server = http.createServer();
var url = require("url");

var index = fs.readFileSync('public/index.html','utf8',function(err,data){
	if(err) {
		return console.log(err);
	}
});

server.on("request", function(req,res){
	var urlData=url.parse(req.url);
	var path = urlData.pathname;
	var filePath= "public"+path;
	fs.exists(filePath,function(exists){
		if(exists){
			fs.readFile(filePath, function(err,data){
				if (err){
					res.writeHead(500);
					res.end("404 NOT FOUND, Especifique la ruta correcta")
				}else{
					res.end(data);
				}
			})
		}else {
			res.writeHead(404);
			res.end("No existe")
		}
	});
});

server.listen(process.env.PORT || 3000);