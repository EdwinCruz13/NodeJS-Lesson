# NodeJS-Lesson - Node Package Manager (NPM)

<details open="">
  <summary><h2>✨NPM</h2></summary>
    <p dir="auto">
        npm (originally short for Node Package Manager) is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc. These package you can be found <a href="https://www.npmjs.com/">🔗 HERE!!!</a>
    </p>
</details>

<details open="">
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