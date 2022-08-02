//require http module
const http = require('http');

//create variable that stored data about host and port
const host = '127.0.01';
const port = '3000'

http.createServer((req, resp) => {
    //message 
    console.log(`Server is listening on ${host}:${port}`);

    //Define Content-Type
    resp.writeHead(200, { "Content-Type" : "text/csv", "filename": "http-csv.csv"});

    resp.end('seccion 1, seccion 2, seccion 3, seccion 4, seccion 5');
}).listen(port)