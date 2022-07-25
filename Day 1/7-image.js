//create a server http
var http = require('http');

//Library that we use in order to write and read file
var fs = require('fs');

//define server
var host = '127.0.0.1';
var port = '3000';

//Create a Server in node js and server image
var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type" : "image/png"});
    fs.readFile('resource/chart.png', (err, data) => {
		//checking for errors
		if (err) 
			throw err;
		console.log("Operation Success");
		//sending the response
		response.end(data);
	});
}).listen(port);
