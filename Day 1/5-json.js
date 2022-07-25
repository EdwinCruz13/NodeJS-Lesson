//to create a webserver in nodejs, it is necessary to know about http status code
//these status codes could be categorized as:
//      1xx informational response – the request was received, continuing process
//      2xx successful –             the request was successfully received, understood, and accepted
//      3xx redirection –            further action needs to be taken in order to complete the request
//      4xx client error –           the request contains bad syntax or cannot be fulfilled
//      5xx server error –           the server failed to fulfil an apparently valid request


// Create a Server in node js
var http = require('http');

// Define host and port
var host = '127.0.0.1';
var port = '3000'

//Create a Server in node js and serve JSON
var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "application/json"});

    //Create a JSON
	let json_response = {
		status : 200 , 
		message : 'succssful' , 
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}

    response.end(JSON.stringify(json_response));
}).listen(port);