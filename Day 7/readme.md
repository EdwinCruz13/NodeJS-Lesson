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
  <summary><h2>🗄️ Example Sending a Json Files</h2></summary>
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
- [x] Throught the arrow function add a "writeHead" method using the parameters "http code {200}" and "Content-Type {application/json}".
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
- [x] Execute using the terminal.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/resources/image-3.png?raw=true" width ="100%"/>
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/resources/image-4.png?raw=true" width ="100%"/>

  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/http-json.js">👓 Here</a>
</details>


<details open="">
  <summary><h2>🗃️ Example Sending a CSV Files</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "http-csv.js".
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
- [x] Throught the arrow function add a "writeHead" method using the parameters "http code {200}" and "Content-Type {text/csv}".
- [x] Use the function "end" in order to send a csv response like this 'seccion 1, seccion 2, seccion 3, seccion 4, seccion 5'.
```
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
```
- [x] Execute using the terminal.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/resources/image-1.png?raw=true" width ="100%"/>
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/resources/image-2.png?raw=true" width ="100%"/>
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/http-csv.js">👓 Here</a>
</details>



<details open="">
  <summary><h2>📝 Example Sending a HTML Files</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "http-html.js".
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
- [x] Throught the arrow function add a "writeHead" method using the parameters "http code {200}" and "Content-Type text/html".
- [x] Use the function "end" in order to send a csv response like this ↓.
```
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
```
- [x] Execute using the terminal.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/resources/image-5.png?raw=true" width ="100%"/>
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/resources/image-6.png?raw=true" width ="100%"/>

  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/http-html.js">👓 Here</a>
</details>



<details open="">
  <summary><h2>📝 Example Sending a HTML Files From a Resource</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "http-html.js".
- [x] Add the next code:
```
var http = require('http');
```
- [x] The variable will help to instance the module HTTP, and then create two variable named host and port.
```
var host = '127.0.0.1'; //localhost
var port = 3000; // default port
```
- [x] This example we are going to use the 'fs' module in order to read a file synchronously.
```
const fs = require('fs');
```
- [x] Read the file locate in the same path synchronously 
```
var filename = 'presentation.html'; //Name of the file to be read
var htmlFile = fs.readFileSync(filename);
```
- [x] Now, we are going to instance the HTTP Server.
- [x] Throught the arrow function add a "writeHead" method using the parameters "http code {200}" and "Content-Type text/html".
- [x] Use the function "end" in order to send a csv response like this ↓.
```
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
```
- [x] Execute using the terminal.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/resources/image-7.png?raw=true" width ="100%"/>
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/resources/image-8.png?raw=true" width ="100%"/>

  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%207/http-html-file.js">👓 Here</a>
</details>


