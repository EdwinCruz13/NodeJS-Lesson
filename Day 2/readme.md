# NodeJS-Lesson - Your First Server with HTTP Module

<details open="">
  <summary><h2>✨HTTP Status Codes</h2></summary>
    <p dir="auto">
        to create a webserver in nodejs, it is necessary to know about http status code, more detail you can find it in the next website <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">🔗 HERE!!!</a>
        <br>
        these status codes could be categorized as:
              1xx informational response – the request was received, continuing process
              2xx successful –             the request was successfully received, understood, and accepted
              3xx redirection –            further action needs to be taken in order to complete the request
              4xx client error –           the request contains bad syntax or cannot be fulfilled
              5xx server error –           the server failed to fulfil an apparently valid request
    </p>
    <p>
        * Node provide us with the inbuilt http module which we can use to create the server. Get the access to the module by using 'require' 
    </p>
    <p>
        * To develop this example we need to define two variable: host = 127.0.0.1 and port = 3000,  
    </p>
</details>

<details open="">
  <summary><h2>💪 Example with HTTP Module</h2></summary>
  <p dir="auto">
    
- [x] It is time to create a new file, you can name it as "2-Server.js".
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
<br>
request : which contains all the information related to client's request such as URL, custom headers , client info , etc.
<br>
response : which is used to return the data back to the client.
<br>
response.writeHead: it is an inbuilt method which is used to send the status code and the MIME type. (Content-Type)
response.end(): it is an inbuilt function which is used to tell the server that the request has been fulfilled.Along with that we can also send one response using this.
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
  
  ###### This example you can find it in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%202/2-Server.js">👓 Here</a>
</details>
