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
    
- [x] It is time to create a new file, you can name it as "http-json.js".
- [x] Add the next code:
```
var http = require('http');
```
- [x] The variable will help to instance the module HTTP, and then create two variable named host and port
```
var host = '127.0.0.1'; //localhost
var port = 3000; // default port
```
- [x] Create a server using the createServer() method. createServer() method takes a callback function as arguments. This callback is executed each time a request is received. The two arguments of createServer() method are:
- request : which contains all the information related to client's request such as URL, custom headers , client info , etc.
- response : which is used to return the data back to the client.
- [x] Inside the arrow function, write the next method throuht response arguments.
- response.writeHead: it is an inbuilt method which is used to send the status code and the <a href="https://en.wikipedia.org/wiki/Media_type"> MIME type </a>.
- response.end(): it is an inbuilt function which is used to tell the server that the request has been fulfilled. Along with that we can also send one response using this.
```
var server = http.createServer((request, response) => {
    //Sends a response header to the request. 
    //The status code is a 3-digit HTTP status code, like 200. The last argument, headers, are the response headers
    response.writeHead(200, { "Content-Type" : "text/plain"})
    response.end('Server Working Success');
});
```
- [x] Then we have to use the method named 'listen' thay would help to run the server accordint the host and port:
```
server.listen(port, host, (error) => {
    if(error)   
        return console.error(`Error has occured: ${error}`);

    console.log(`Server is listening on ${host}:${port}`);
});
```
  
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%202/2-Server.js">👓 Here</a>
</details>

