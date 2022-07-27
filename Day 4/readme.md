# NodeJS-Lesson - Node Package Manager (NPM)

<details open="">
  <summary><h2>✨NPM</h2></summary>
    <p dir="auto">
        npm (originally short for Node Package Manager) is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc. These package you can be found <a href="https://www.npmjs.com/">🔗 HERE!!!</a>
    </p>
</details>

<details close="">
  <summary><h2>📦 Creating a Package Manager</h2></summary>
    <p dir="auto">
        package.json is a way to manage the locally installed packages and serves as documentation on which our project depends including a directory which keeps track of all the dependencies our project is using.
    </p>    
<p dir="auto">

- [x] Using the console, add the next sentence:
```
npm init;
```
- [x] Following, the npm prompt will ask you a package name, this example will be named as "day4_package" (be careful with capital letter):
```
package name: (day-4) day4_package
```
- [x] Then, define a version in your package manager (1.0.0).
- [x] After, define a description in your package manager: "Defining the day 4".
- [x] Also, define a default file "index.js".
- [x] Then, enter a "text command", "git repository" and "keyword", those you may leave them empty.
- [x] We almost finish, digit an author, use your @name or email.
- [x] finally, accept any changes.
- [x] Open the package.json file located in the work path, you will see the first package json and the data you have input before.
```
{
  "name": "day4_package",
  "version": "1.0.0",
  "description": "Defining the day 4",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "class4"
  ],
  "author": "@edwin",
  "license": "ISC"
}
```
</details>


<details close="">
  <summary><h2>📒 Installing a Package</h2></summary>
    <p dir="auto">
        There are two ways to install a package.
        <br>
              * Locally: We install packages locally when we need to require them in our application for example 'express'.
        <br>
              * Globally: We install packages globally when we want to use it, this will do it in background.
        <br>
    </p>

  <p dir="auto">
      <br>
      * The next example we are going to install 'express' package locally.
      <br>

  - [x] Open the console and add the next sentence.
  ```
  npm install express
  ```
  </p>
  
  - [x] After the installation, you will see a new folder named "node_modules" that contain all library that will be used by express package.
  - [x] Now, check out the package.json file in the path, you will see some changes as:
   ```
  "dependencies": {
      "express": "^4.18.1"
  }
  ```
  - [x] Express package has been installed has a dependecies that will be used in the path, the express version is "4.18.1".
  - [x] Create a new file, this time I am going to name it "index.js".
  - [x] In "index.js" file add the next code and execute using the terminal.
```
const express = require('express');
```
  - [x] Execute using the terminal.
```
node index.js
```
- [x] You will see after the execution, the run did not trigger any error.
</details>


<details open="">
  <summary><h2>❌Removing a Package</h2></summary>
    <p dir="auto">

  - [x] Now, we have to uninstall the express package, in yout terminal add the next instruction:
 ```
npm uninstall express
```
- [x] Instantaneously the package will be uninstalled from your path, and the package.json will remove the dependencies.
 ```
{
  "name": "day4_package",
  "version": "1.0.0",
  "description": "Defining the day 4",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "class4"
  ],
  "author": "@edwin",
  "license": "ISC"
}
```
  </p>
</details>


<details open="">
  <summary><h2>✨Installing an Old Version</h2></summary>
    <p dir="auto">

  - [x] You probably think that it is a little unsafer install or update the recent version of a package, NPM provides us a good way to install a previous 
        version, you can do it with the next code in your console:

   ```
    npm install express@4.15.1
   ```

  - [x] Then, the package.json file will be modified, adding the new express dependency, this time using a version "4.15.1".
  
   ```
    "dependencies": {
      "express": "^4.15.1"
     }
   ```
  </p>
</details>
