//require http module
const http = require('http');
//require fs module
const fs = require('fs');

//create variable that stored data about host and port
const host = '127.0.01';
const port = '3000';

//read a file
var filename = 'presentation.html'; //Name of the file to be read
var htmlFile = fs.readFileSync(filename);




http.createServer((req, resp) => {
    //message 
    console.log(`Server is listening on ${host}:${port}`);

    //Define Content-Type
    resp.writeHead(200, { "Content-Type" : "text/html"});

    resp.end(htmlFile);
}).listen(port)