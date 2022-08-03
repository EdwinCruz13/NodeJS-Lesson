# NodeJS-Lesson - Express

<details open="">
  <summary><h2>✨ Express</h2></summary>
    <p dir="auto">
        Express is a minimal and flexible Node.js web application framework that provides 
        a robust set of features for web and mobile applications. This framework can be found in the next link <a href="https://www.npmjs.com/package/express">🔗 Over Here!!!</a>
        <br><br>
        Express gives you an API, submodules, functions, and methodology and conventions for quickly and easily typing together all the components necessary to put up a modern, functional web server with all the conveniences necessary for that (static asset hosting, templating, handling CSRF, CORS, cookie parsing, POST data handling, and many more functionalities.
        <br>
        Then, why do I make my application with express?!, we have to know the difference between Http and Express:
        <p>
          <figure class="table">
            <table>
              <tbody>
                <tr>
                  <td><p style="text-align:center">HTTP</p></td>
                  <td><p style="text-align:center">Express</p></td>
                </tr>
                <tr>
                  <td>HTTP comes inbuilt along with NodeJS that is, we don’t need to install it explicitly.&nbsp;</td>
                  <td>Express is installed explicitly using npm command: <i>npm install express&nbsp;</i></td>
                </tr>
                <tr>
                  <td>HTTP is not a framework as a whole, rather it is just a module.</td>
                  <td>Express is a framework as a whole.</td>
                </tr>
                <tr>
                  <td>HTTP does not provide function for static hosting, you require to write your own.</td>
                  <td>Express provide <i>express.static </i>function for static asset hosting. Example: <i>app.use(express.static(‘public’));</i></td>
                </tr>
                <tr>
                  <td>HTTP is an independent module.</td>
                  <td>Express is made on top of the HTTP module.</td>
                </tr>
                <tr>
                  <td>HTTP module provides various tools (functions) to do things for networking like making a server, client, etc.</td>
                  <td>Express along with what HTTP does provide many more functions in order to make development easy.</td>
                </tr>
              </tbody>
            </table>
          </figure>
        </p>
    </p>
</details>

<details open="">
  <summary><h2>💬 Installing</h2></summary>
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


