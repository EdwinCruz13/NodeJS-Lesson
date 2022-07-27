# NodeJS-Lesson - File System

<details open="">
  <summary><h2>✨Type of method</h2></summary>
    <p dir="auto">
        The Node.js file system module allows you to work with the file system on your computer.
        <br>
        The methods we are going to work are:
        <br>
              * Read a File.
        <br>
              * Write a File.
        <br>
              * Append a File.
        <br>
              * Rename a File.
        <br>
              * Delete a File
    </p>
    <p>
        * Those methods could be worked asynchronously and synchronously.
    </p>
</details>

<details open="">
  <summary><h2>💪 Example with Read a File</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "readme.js".
- [x] Now, we have to import the module 'fs', then add the next code:
```
var fs = require('fs');
```
- [x] There is two type of execution in NodeJS: Asynchronous and Synchronous
```
Asynchronous = means that NodeJS avoid blocking code, then the execution will be doing in background mode until it is accomplished.
Synchronous = means that NodeJS await the task will be accomplished, then the execution will resume.
```
- [x] Add the next section of code in order to read a file asynchronously:
```
//method tha works Asynchronously 
fs.readFile('resource/read.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content 1 :  " + data);
});
```
- [x] Add the next section of code in order to read a file synchronously:
```
var filename = 'resource/read.txt'; //Name of the file to be read
var content = fs.readFileSync(filename);
console.log('Content : ' + content);
```
  
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%202/2-Server.js">👓 Here</a>
</details>

```
//Node provide us with a inbuilt http module which we can use to create the server
var http = require('http');

//Define a host and port
var host = '127.0.0.1'; //localhost
var port = 3000; // default port

//create an object type http
var server = http.createServer((request, response) => {
    //Sends a response header to the request. 
    //The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers
    response.writeHead(200, { "Content-Type" : "text/plain"})
    response.end('Server Working Success');
});

//execute the server using the 'listen method'
server.listen(port, host, (error) => {
    if(error)   
        return console.error(`Error has occured: ${error}`);

    console.log(`Server is listening on ${host}:${port}`);
});
```
- [x] Execute the app using the terminal.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%201/resource/img/5-http%20server.png?raw=true" width ="100%"/>

- [x] Then, check it using the browser (chrome, firefox, opera, or 😂 IE 😂).
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%201/resource/img/5-http%20client.png?raw=true" width ="100%"/>

