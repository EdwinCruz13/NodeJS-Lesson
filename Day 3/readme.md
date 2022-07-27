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





<details close="">
  <summary><h2>💪 Example Appending to a File</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "appendme.js".
- [x] Now, we have to import the module 'fs', then add the next code:
```
var fs = require('fs');
```
- [x] There is two type of execution in NodeJS: Asynchronous and Synchronous
```
Asynchronous = means that NodeJS avoid blocking code, then the execution will be doing in background mode until it is accomplished.
Synchronous = means that NodeJS await the task will be accomplished, then the execution will resume.
```
- [x] Add the next section of code in order to write a file asynchronously (automatically, the file will be create in the path we define and append a new text at the end of the file):
```
//use \n to jump to the next line
var appending = "\nThis data will be appended at the end of the file writeme.js";

fs.appendFile('resource/writing_a_file.txt', appending , (err) => {
	if(err) 
		throw err;
	console.log('Saved it');
});
```
- [x] Add the next section of code in order to read a file synchronously:
```
//file append operation in nodejs
var fs = require('fs');
var content = "\nThis data will be appended at the end of the file writing_a_file.txt";
fs.appendFileSync('resource/writing_a_file.txt', content);
console.log("File Appended Successfully");
```
  
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/appendme.js">👓 Here</a>
  
  - [x] Execute the app using the terminal 'node appendme.js', you will see the execution Asynchronously or Synchronously.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/appendme.png?raw=true" width ="100%"/>

- [x] Now, check out the file located in the resource path, you will see the file has been modified at the end of the line.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/appendme2.png?raw=true" width ="100%"/>
</details>





<details close="">
  <summary><h2>💪 Example Rename a File</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "renameme.js".
- [x] Now, we have to import the module 'fs', then add the next code:
```
var fs = require('fs');
```
- [x] There is two type of execution in NodeJS: Asynchronous and Synchronous
```
Asynchronous = means that NodeJS avoid blocking code, then the execution will be doing in background mode until it is accomplished.
Synchronous = means that NodeJS await the task will be accomplished, then the execution will resume.
```
- [x] Add the next section of code in order to write a file asynchronously (pd: if the file does not exists there will be a fatal error):
```
//you have to pass the Relative path of the file from the Current working directory.
fs.rename('resource/writing_a_file.txt', 'resource/new_file.txt', (err) => {
	if (err)
		throw err;
	console.log('File renamed successfully');
});
```
- [x] Add the next section of code in order to rename a file synchronously:
```
//you have to pass the Relative path of the file from the Current working directory.
fs.renameSync('resource/new_file.txt', 'resource/writing_a_file.txt');
console.log('File renamed successfully');
```
  
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/renameme.js">👓 Here</a>
  
  - [x] Execute the app using the terminal 'node renameme.js', you will see the execution Asynchronously or Synchronously.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/renameme.png?raw=true" width ="100%"/>

- [x] Now, check out the file located in the resource path, you will see the file has been renamed by new_file.txt.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/renameme2.png?raw=true" width ="100%"/>
</details>



<details close="">
  <summary><h2>💪 Example Delete a File</h2></summary>
  <p dir="auto">
    
- [x] Create a new file, you can name it as "deleteme.js".
- [x] Now, we have to import the module 'fs', then add the next code:
```
var fs = require('fs');
```
- [x] There is two type of execution in NodeJS: Asynchronous and Synchronous
```
Asynchronous = means that NodeJS avoid blocking code, then the execution will be doing in background mode until it is accomplished.
Synchronous = means that NodeJS await the task will be accomplished, then the execution will resume.
```
- [x] Add the next section of code in order to write a file asynchronously (pd: if the file does not exists there will be a fatal error, so create the 'writing_a_file.txt' file in 'resource' folder):
```
//the file to delete
var filename = 'resource/writing_a_file.txt';

//asychronously
fs.unlink(filename, (err) => {
	if (err) 
		throw err;
	console.log('File deleted successfully');
});
```
- [x] Add the next section of code in order to delete a file synchronously:
```
//the file to delete
var filename = 'resource/writing_a_file.txt';
//sychronously
fs.unlinkSync(filename);
console.log('File Deleted Successfully');
```
  
  ###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/deleteme.js">👓 Here</a>
  
  - [x] Execute the app using the terminal 'node deleteme.js', you will see the execution Asynchronously or Synchronously.
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%203/resource/deleteme.png?raw=true" width ="100%"/>

- [x] Now, check out the file located in the resource path, you will see the file has been eliminated from the path.
🤣 🤣 There is not a file!!!!!
</details>



