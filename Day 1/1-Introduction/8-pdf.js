//use the library
var http = require('http');
var fs = require('fs');

//define host and port
var host = '127.0.0.1';
var port = '3000';

//instance the http server
var server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/pdf"});
 
	fs.readFile('resource/DesignPatterns.pdf', (error,data) => {
		if(error){
			res.json({'status':'error',msg:err});
		}else{			
			response.write(data);
			response.end();       
		}
	});
}).listen(port);