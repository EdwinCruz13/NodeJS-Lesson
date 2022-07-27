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

<details close="">
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
  
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/readme.js">👓 Here</a>
  
  - [x] Execute the app using the terminal 'node readme.js', you will see the execution Asynchronously.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/readAsychronously.png?raw=true" width ="100%"/>

- [x] Execute the app using the terminal 'node readme.js', you will see the execution Synchronously.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/readSychronously.png?raw=true" width ="100%"/>
</details>



<details close="">
  <summary><h2>💪 Example Write a File</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "writeme.js".
- [x] Now, we have to import the module 'fs', then add the next code:
```
var fs = require('fs');
```
- [x] There is two type of execution in NodeJS: Asynchronous and Synchronous
```
Asynchronous = means that NodeJS avoid blocking code, then the execution will be doing in background mode until it is accomplished.
Synchronous = means that NodeJS await the task will be accomplished, then the execution will resume.
```
- [x] Add the next section of code in order to write a file asynchronously (automatically, the file will be create in the path we define):
```
//the content that we have to write to
var content= "this is the content that I want to write";

//write the file using the content we made before
fs.writeFile('resource/writing_a_file.txt', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
});
```
- [x] Add the next section of code in order to read a file synchronously:
```
var fs = require('fs');
var content = "We are writing this file synchronously using node.js";
fs.writeFileSync('resource/writing_a_file.txt', content);
console.log("File Written Successfully");
```
  
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/writeme.js">👓 Here</a>
  
  - [x] Execute the app using the terminal 'node writeme.js', you will see the execution Asynchronously.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/writeAsychronously.png?raw=true" width ="100%"/>

- [x] Execute the app using the terminal 'node writeme.js', you will see the execution Synchronously.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/writeAsychronously.png?raw=true" width ="100%"/>
</details>


