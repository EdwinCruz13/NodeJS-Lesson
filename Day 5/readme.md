# NodeJS-Lesson - Require & Module

<details open="">
  <summary><h2>✨Overview</h2></summary>
    <p dir="auto">
        In the class <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/tree/main/Day%202">Day 2 - Node Package Manager.<a/> we learnt about the node package manager and ways to install, update and delete any package to our application using the ***keyword*** "require", that is how we use a module from another library, that is known as modularization.
        <br>
        🧐 Now, it's time to create our own modules and to import a main file in order to modularize the application.
        <br>
    </p>
</details>

<details open="">
  <summary><h2>🚢 Exporting a file</h2></summary>
  
  **<h2>The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.</h2>**
 <br>
    <p dir="auto">

- [x] Create a file named "module.exports.js" and add the next sentence:
```
module.exports = 'Hello world';
```
- [x] Now, create a new file named "main.js" and use the keyword import in orden to use the funcionality from "module.exports.js". PD: do not forget the "./"
```
//import from module.exports.js
var msg = require('./module.exports.js');
//print the result
console.log(msg)
```
<br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%205/resources/result.png?raw=true" width ="100%"/>
</p>
<br>

 **<h2>The "exports" is an object. So, you can attach properties or methods to it. The following example exposes an object with a string property in exports.js file.</h2>**
<br>
<p dir="auto">

- [x] Create a file named "exports.js" and add the next sentence:
```
exports.SimpleMessage = 'Hello world';
```
- [x] Now, use the keyword import in orden to use the funcionality from "exports.js". PD: do not forget the "./"
```
var msg2 = require('./exports.js');
//print the result
console.log(msg2);
```
<br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%205/resources/result2.png?raw=true" width ="100%"/>
</p>
<br>

**<h2>You can attach an anonymous function to exports object as shown below:</h2>**
<br>
<p dir="auto">

- [x] Create a file named "export.function.js" and add the next sentence:
```
module.exports = function (msg) { 
    console.log(msg);
};
```
- [x] Now, use the keyword import in orden to use the funcionality from "export.function.js". PD: do not forget the "./"
```
//import from export.function.js
var msg3 = require('./export.function.js');
//print the result
msg3('Hello World');
```
<br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%205/resources/result3.png?raw=true" width ="100%"/>
</p>
<br>

**<h2>In JavaScript, a function can be treated like a class, the following example exposes a function that can be used like a class</h2>**
<br>
<p dir="auto">

- [x] Create a file named "export.class.js" and add the next sentence:
```
module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}
```
- [x] Now, use the keyword import in orden to use the funcionality from "export.class.js". PD: do not forget the "./"
```
var person = require('./export.class.js');
//create a new object
var person1 = new person('Timmy', 'Turner');
console.log(person1.fullName());

```
<br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%205/resources/result4.png?raw=true" width ="100%"/>
</p>

</details>
