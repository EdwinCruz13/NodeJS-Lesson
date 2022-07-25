//to create a webserver in nodejs, it is necessary to know about http status code
//these status codes could be categorized as:
//      1xx informational response – the request was received, continuing process
//      2xx successful –             the request was successfully received, understood, and accepted
//      3xx redirection –            further action needs to be taken in order to complete the request
//      4xx client error –           the request contains bad syntax or cannot be fulfilled
//      5xx server error –           the server failed to fulfil an apparently valid request


// Create a Server in node js

//Node provide us with a inbuilt http module which we can use to create the server
var http = require('http');

//Define a host and port
var host = '127.0.0.1'; //localhost
var port = 3001; // default port

//create an object type http
var server = http.createServer((request, response) => {
    console.log(`Server is listening on ${host}:${port}`);
    response.writeHead(200, { "Content-Type" : "text/plain"})
    response.end('Server Working Success');
}).listen(port);