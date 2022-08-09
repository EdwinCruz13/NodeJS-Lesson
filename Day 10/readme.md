# NodeJS-Lesson - Express

<details open="">
  <summary><h2>✨ Express - Response</h2></summary>
    <p dir="auto">
        In this section, we are going to show the many ways how the server sends a response.
        The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.
  <br>
        
  <figure class="table">
    <table>
      <tbody>
        <tr>
          <td><p style="text-align:center">Method</p></td>
          <td><p style="text-align:center">Description</p></td>
        </tr>
        <tr>
          <td>res.download()</td>
          <td>Prompt a file to be downloaded</i></td>
        </tr>
        <tr>
          <td>res.end()</td>
          <td>End the response process</td>
        </tr>
        <tr>
          <td>res.json()</td>
          <td>Send a JSON response</i></td>
        </tr>
        <tr>
          <td>res.jsonp()</td>
          <td>Send a JSON response with JSONP support</td>
        </tr>
        <tr>
          <td>res.redirect()</td>
          <td>Redirect a request</td>
        </tr>
        <tr>
          <td>res.render()</td>
          <td>Render a view template</td>
        </tr>
        <tr>
          <td>res.send()</td>
          <td>Send a response of various types</td>
        </tr>
        <tr>
          <td>res.sendFile()</td>
          <td>Send a file as an octet stream</td>
        </tr>
        <tr>
          <td>res.sendStatus()</td>
          <td>Set the response status code and send its string representation as the response body</td>
        </tr>
      </tbody>
    </table>
  </figure>
  </p>
</details>


<details open="">
  <summary><h2>💬 End Response</h2></summary>
  <p dir="auto">
        Ends the response process. This method actually comes from Node core, specifically the response.end() method of http.ServerResponse.
        Use to quickly end the response without any data. If you need to respond with data, instead use methods such as res.send() and res.json().
  </p>

  <p dir="auto">

- [x] Create a new file named end.js, then, require express module
```
//require express module
const express = require('express');

//instance express
const app = express();
```

- [x] Define a basic middleware.
```
//use a middleware before the download, because we want to know
//the guy who is downloading our file through the "download" route
app.use("/", (req, res, next) => {
    console.log("Someone is accessing in ", req.url);
    next();
});
```

- [x] Add different routes adding the method "use"
```
//create new route named plain
app.use("/plain", (req, res) => {
    res.format({
        'text/plain': function () {
            res.send('hey')
        }
    })
});

//create new route named html
app.use("/html", (req, res) => {
    res.format({
        'text/html': function () {
          res.send('<h1>hey</h1>')
        }
    })
});

//create new route named json
app.use("/json", (req, res) => {
    res.format({
        'application/json': function () {
          res.send({ message: 'hey' })
        }
    })
});

//create new route named default that return a http code 406
app.use("/default", (req, res) => {
    res.format({
        default: function () {
          // log the request and respond with 406
          res.status(406).send('Not Acceptable')
        }
    })
});
```

- [x] Now, use the listen method to start the server
```
//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});
```

- [x] execute the app
```
node end.js
```

- [x] Visualize the app through the browser and go to one of our routes www.localhost:3000/json

  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%2010/resources/resp.png?raw=true" width ="100%"/>
  </p>
</details>


<details open="">
  <summary><h2>💬 Send Response</h2></summary>
  <p dir="auto">
        Sends the HTTP response.
        This method is look like the last one, and easy to apply.
        This method performs many useful tasks for simple non-streaming responses: For example, it automatically assigns the Content-Length HTTP response header field (unless previously defined) and provides automatic HEAD and HTTP cache freshness support.
  </p>

  <p dir="auto">

- [x] Create a new file named send.js, then, require express module
```
//require express module
const express = require('express');

//instance express
const app = express();
```

- [x] Define a basic middleware.
```
//use a middleware before the download, because we want to know
//the guy who is downloading our file through the "download" route
app.use("/", (req, res, next) => {
    console.log("Someone is accessing in ", req.url);
    next();
});
```

- [x] Add different routes adding the method "use", then you will see the difference between send and end methods
```
/create new route named plain
app.get("/plain", (req, res) => {
    res.send('hey')
});

//create new route named html
app.get("/html", (req, res) => {
    res.send('<h1>hey</h1>')
});

//create new route named json
app.use("/json", (req, res) => {
    res.send({ message: 'hey' })
});

//create new route named default that return a http code 406
app.get("/default", (req, res) => {
    res.status(406).send('Not Acceptable')
});

app.get("/error", (req, res) => {
    res.status(500).send({ error: 'something blew up' })
});
```

- [x] Now, use the listen method to start the server
```
//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});
```

- [x] execute the app
```
node send.js
```

- [x] Visualize the app through the browser and go to one of our routes www.localhost:3000/json

  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%2010/resources/resp.png?raw=true" width ="100%"/>
  </p>
</details>




<details open="">
  <summary><h2>💬 JSON Response</h2></summary>
  <p dir="auto">
        Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().
        The parameter can be any JSON type, including **object**, **array**, **string**, **Boolean**, **number**, or **null**, and you can also use it to convert other values to JSON.
  </p>

  <p dir="auto">

- [x] Create a new file named json.js, then, require express module
```
//require express module
const express = require('express');

//instance express
const app = express();
```



- [x] Add different a route adding the method "use", the route could be "/"
```
app.use("/", (req, res) => {
    res.json({ user: 'edwin' })
});
```

- [x] Now, use the listen method to start the server
```
//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});
```

- [x] execute the app
```
node json.js
```

- [x] Visualize the app through the browser and go to one of our routes www.localhost:3000/

  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%2010/resources/resp3.png?raw=true" width ="100%"/>
  </p>
</details>




<details open="">
  <summary><h2>💬 Redirect Response</h2></summary>
  <p dir="auto">
       Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . If not specified, status defaults to “302 “Found”.
  </p>

  <p dir="auto">

- [x] Create a new file named redirect.js, then, require express module
```
//require express module
const express = require('express');

//instance express
const app = express();
```



- [x] Add different a route adding the method "use", the route could be "/" and "/aboutus"
```
app.get("/", (req, res) => {
    res.redirect('/aboutus')
});

app.get("/aboutus", (req, res) => {
    res.json({ user: 'edwin', pass:'****', email: 'edwin@gmail.com' })
});
```

- [x] Now, use the listen method to start the server
```
//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});
```

- [x] execute the app
```
node redirect.js
```

- [x] Visualize the app through the browser and go to one of our routes www.localhost:3000/ . Then, you will see the "/" routes redirect to "/aboutus" route automatically ↓

  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%2010/resources/resp4.png?raw=true" width ="100%"/>
  </p>
</details>


<details open="">
  <summary><h2>💬 Download Response</h2></summary>
  <p dir="auto">
       Transfers the file at path as an “attachment”. Typically, browsers will prompt the user for download. By default, the Content-Disposition header “filename=” parameter is derrived from the path argument, but can be overridden with the filename parameter. If path is relative, then it will be based on the current working directory of the process or the root option, if provided of course.
  </p>

  <p dir="auto">

- [x] Create a new file named download.js, then, require express module
```
//require express module
const express = require('express');

//instance express
const app = express();
```

- [x] add a middleware than execute first any request from /download route
```
//use a middleware before the download, because we want to know
//the guy who is downloading our file through the "download" route
app.use("/download", (req, res, next) => {
    console.log("Someone is accessing to our file to download...");
    next();
});
```



- [x] Add different a route adding the method "get", the route will be "/download"
```
//create a new route named "download" that send a response a file
app.get("/download", (req, res) => {
    const file = `${__dirname}/resources/git_sheets.pdf`;
    res.download(file)
});

```

- [x] Now, use the listen method to start the server
```
//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});
```

- [x] execute the app
```
node redirect.js
```

- [x] Visualize the app through the browser and go to one of our routes www.localhost:3000/download . Then, you will see an attachment that will be downloaded soon ↓

  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%2010/resources/resp2.png?raw=true" width ="100%"/>
  </p>
</details>


