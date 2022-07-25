// Create a Server in node js
var http = require('http');

//Library that we use in order to write and read file
var fs = require('fs');

// Define host and port
var host = '127.0.0.1';
var port = '3000'

//Create a Server in node js and serve html
var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    //read a file 
	fs.readFile('resource/Login.html', (err, data) => {
		//checking for errors
		if (err) 
			throw err;
		console.log("Operation Success");
		//sending the response
		response.end(data);
	});

}).listen(port);