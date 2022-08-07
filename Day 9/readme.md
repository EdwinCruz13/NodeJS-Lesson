# NodeJS-Lesson - Express

<details open="">
  <summary><h2>✨ Express - Routing</h2></summary>
    <p dir="auto">
        Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing. Each route can have one or more handler functions, which are executed when the route is matched. Route definition takes the following structure:
        <br>
        ```
        app.METHOD(PATH, HANDLER)
        ```
        <br>
        App is an instance of express.
        <br>
        METHOD is an HTTP request method, in lowercase.
        <br>
        PATH is a path on the server.
        <br>
        HANDLER is the function executed when the route is matched.
    </p>
</details>

<details open="">
  <summary><h2>💬 Request methods</h2></summary>
  <p dir="auto">

- [x] Create a new file named "index.js", that will be used after the installation of express framework, be patient.  
- [x] Using the console make a package.json file npm. See this page that explains how you can do it <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/tree/main/Day%202">🔗 Over Here.</a>
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%208/resources/file1.png?raw=true" width ="100%"/>

- [x] You will see your package.json like this:
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%208/resources/file2.png?raw=true" width ="100%"/>

- [x] It is time to install "express", using the console write the next command
```
//install express locally (add -g if you want to install express globally)
npm install express
```
- [x] After the setup, inmediatly you will see new folder in your work path.
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%208/resources/file3.png?raw=true" width ="100%"/>

- [x] Check the package.json, you will see the express module installed as dependencies.
```
{
  "name": "expresspackage_example",
  "version": "1.0.0",
  "description": "example using express",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/EdwinCruz13/NodeJS-Lesson.git"
  },
  "keywords": [
    "express",
    "framework",
    "nodejs",
    "mern"
  ],
  "author": "EdwinCruz",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/EdwinCruz13/NodeJS-Lesson/issues"
  },
  "homepage": "https://github.com/EdwinCruz13/NodeJS-Lesson#readme",
  "dependencies": {
    "express": "^4.18.1"
  }
}
```
- [x] node_module folder is where the new packages will be executed.
</p>
</details>



<details open="">
<summary><h2>🏃‍♀️ Run your Express Server</h2></summary>
  <p dir="auto">

- [x] Now open the index.js file that was created before.
- [x] It is time to import express using the next command.
```
const express = require('express');
```
- [x] Then, instance express into a object.
```
const app = express();
```
- [x] Finally, execute the application as webserver like this way:
```
app.listen(3000, () => {
    console.log(`Server on port 3000`)
})
```
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%208/resources/file4.png?raw=true" width ="100%"/>
</br></br>

- [x] Open your browser and check your webserver:
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%208/resources/file5.png?raw=true" width ="100%"/>
</br></br>

- [x] <h3>In your browser you will see a kind of error, It is not!!!</h3>, the reason is we did not define any "route" and a "content-type" that the browser could understand, before the execution command, add the next command after the instancing of express and execute the app again.
```
//define a main route
app.get("/", (req, res) => {
    res.send("Hello world")
})
```
</br></br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%208/resources/file6.png?raw=true" width ="100%"/>
</br></br>

###### This example can be found in the repository <a href="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%208/index.js">👓 Here</a>
</p>
</details>


