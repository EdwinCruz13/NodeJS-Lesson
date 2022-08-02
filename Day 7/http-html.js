//require http module
const http = require('http');

//create variable that stored data about host and port
const host = '127.0.01';
const port = '3000'

http.createServer((req, resp) => {
    //message 
    console.log(`Server is listening on ${host}:${port}`);

    //Define Content-Type
    resp.writeHead(200, { "Content-Type" : "text/html"});

    resp.end(`<h1>Hello World</h1><br><h4>I am working on ${host}:${port}</h4>`);
}).listen(port)