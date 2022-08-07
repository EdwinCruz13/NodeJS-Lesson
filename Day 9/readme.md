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
        
  - **App** is an instance of express.
  - **METHOD** is an HTTP request method, in lowercase.
  - **PATH** is a path on the server.
  - **HANDLER** is the function executed when the route is matched.
  </p>
</details>

<details open="">
  <summary><h2>💬 Request methods</h2></summary>
  <p dir="auto">
        HTTP Methods or HTTP VERBS defines methods to indicate the desired action to be performed on the identified resource. What this resource represents, whether pre-existing data or data that is generated dynamically, depends on the implementation of the server. Often, the resource corresponds to a file or the output of an executable residing on the server. 
  </p>

  <p>
    <figure class="table">
      <table>
        <tbody>
          <tr>
            <td><p style="text-align:center">HTTP Verb</p></td>
            <td><p style="text-align:center">CRUD</p></td>
            <td><p style="text-align:center">Description</p></td>
            <td><p style="text-align:center">Example</p></td>
            <td><p style="text-align:center">Entire Collection</p></td>
            <td><p style="text-align:center">Specific Item</p></td>
          </tr>
          <tr>
            <td>POST</td>
            <td>Create</td>
            <td>The POST verb is most-often utilized to **create** new resources. In particular, it's used to create subordinate resources. 
                That is, subordinate to some other (e.g. parent) resource. In other words, when creating a new resource, POST to the parent and the service takes care of associating the new resource with the parent, assigning an ID (new resource URI), etc</td>
            <td>POST http://www.example.com/customers</td>
            <td>201 (Created), 'Location' header with link to /customers/{id} containing new ID</td>
            <td>404 (Not Found), 409 (Conflict) if resource already exists</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>Read</td>
            <td>The HTTP GET method is used to **read** (or retrieve) a representation of a resource. In the “happy” (or non-error) path, 
                GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST)</td>
            <td>GET http://www.example.com/customers/12345</td>
            <td>200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists</td>
            <td>200 (OK), single customer. 404 (Not Found), if ID not found or invalid</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>Update/Replace</td>
            <td>PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with 
                the request body containing the newly-updated representation of the original resource.</td>
            <td>PUT http://www.example.com/customers/12345</td>
            <td>405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection.</td>
            <td>200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid</td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td>Update/Modify</td>
            <td>PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource</td>
            <td>PATCH http://www.example.com/customers/12345</td>
            <td>405 (Method Not Allowed), unless you want to modify the collection itself</td>
            <td>200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid</td>
          </tr>
           <tr>
            <td>DELETE</td>
            <td>Delete</td>
            <td>DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.</td>
            <td>DELETE http://www.example.com/customers/12345</td>
            <td>405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable</td>
            <td>200 (OK). 404 (Not Found), if ID not found or invalid</td>
          </tr>
        </tbody>
      </table>
    </figure>
  </p>



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


