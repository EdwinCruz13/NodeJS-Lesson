# NodeJS-Lesson - Your First Server with HTTP Module

<details open="">
  <summary><h2>✨MIME</h2></summary>
    <p dir="auto">
        A media type (also known as a Multipurpose Internet Mail Extensions or MIME type) indicates the nature and format of a document, file, or assortment of bytes. MIME types are defined and standardized in IETF's RFC 6838 RFC 6838<a href="https://docs.w3cub.com/http/basics_of_http/mime_types/complete_list_of_mime_types.html">🔗 Details!!!</a>
        <br>
        The common Media Type are these:
        <br>

***JSON format:*** application/json
        <br>
***HyperText Markup Language:*** text/html
        <br>
***Comma-separated values (CSV):*** text/csv
        <br>
    </p>
</details>

<details open="">
  <summary><h2>💪 Example Sending a Json Files</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "http-json.js".
- [x] Add the next code:
```
var http = require('http');
```
- [x] The variable will help to instance the module HTTP, and then create two variable named host and port
```
var host = '127.0.0.1'; //localhost
var port = 3000; // default port
```
- [x] Now, we are going to instance the HTTP Server.
- [x] Throught the arrow function add a "writeHead" method using parametro "http code {200}" and "Content-Type {application/json}".
- [x] Use the function "end" in order to send a json response like this {"message": "This is a JSON response", "shown": true}.
```
http.createServer((req, resp) => {
    //message 
    console.log(`Server is listening on ${host}:${port}`);

    //Define Content-Type
    resp.writeHead(200, { "Content-Type" : "application/json"});

    resp.end(`{"message": "This is a JSON response", "shown": true}`);
}).listen(port)
```
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/http-json.js">👓 Here</a>
</details>

