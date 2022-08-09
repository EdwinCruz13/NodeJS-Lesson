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
  <summary><h2>💬 End Response Methods</h2></summary>
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
  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%2010/resources/resp.png?raw=true" width ="100%"/>
  </p>
</details>



<details open="">
<summary><h2>🚶 Route paths</h2></summary>
<p dir="auto">
Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.
  <br>
   **This route path will match requests made to /home**
  <br>

  ```
  app.get('/home', (req, res) => {
    res.send('Hello world from home');
  });
  ```
  <br>
  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%209/resources/r1.png?raw=true" width ="100%"/>
</p>
</details>


<details open="">
<summary><h2>🚶 Route parameters</h2></summary>
<p dir="auto">
A Route can accept dynamic values within a path, so called route parameters. Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the **req.params** object, with the name of the route parameter as their key.
  <br>
   **This route path will match requests made to /users/{id}**
  <br>

  ```
  //define a route, then define a parameter names as "userId", that parameter can be reached through "req.params" syntanx:
app.get('/users/:userId', (req, res) => {
    var params = req.params;
    res.send(`Hello world from users: the id entered is ${params.userId}`);
});

  ```
  <br>
  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%209/resources/r2.png?raw=true" width ="100%"/>


  <br><br><br>
  
   **Now, you can exceed and make a complex route like this**

  ```
  //define a route, then define a parameter names as "userId" and "bookID", 
  //those parameters can be reached through "req.params" syntanx:
app.get(`/users/:userId/books/:bookId`, (req, res) => {
    var params = req.params;
    res.send(`Hello world from users/book: the userId entered is ${params.userId} and bookId is ${params.bookId}`);
});

  ```
  <br>
  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%209/resources/r3.png?raw=true" width ="100%"/>
</p>
</details>


<details open="">
<summary><h2>ℹ️ Middleware</h2></summary>
<p dir="auto">
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

**Middleware functions** are functions that have access to the request object (*req*), the response object (*res*), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named *next*.
  <br>

  **Middleware functions can perform the following tasks:**
  <br>

  - **Execute any code.**
  - **Make changes to the request and the response objects.**
  - **End the request-response cycle.** 
  - **Call the next middleware function in the stack.**

  <br>

  - [x] If the current middleware function does not end the request-response cycle, it must call *next()* to pass control to the next middleware function. Otherwise, the request will be left hanging.
  ```
  //defining a middleware
  app.use((req, res, next) => {
      console.log('Time:', Date.now())
      next()
  })
  ```
  <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%209/resources/r4.png?raw=true" width ="100%"/>
  <br><br>

   - [x] **Now, we are going to add a new middleware that will be executed when the users path is reached through http://localhost:3000/users/1**
 
```
//define a middleware for a users route
app.use('/users/:userId', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})

//define a route, then define a parameter names as "userId", that parameter can be reached through "req.params" syntanx:
app.get('/users/:userId', (req, res) => {
    var params = req.params;
    res.send(`Hello world from users: the id entered is ${params.userId}`);
});
```

<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%209/resources/r5.png?raw=true" width ="100%"/>
</p>
</details>


<details open="">
<summary><h2>🪛 Route handlers</h2></summary>
<p dir="auto">
You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.
</p>
<p dir="auto">
Route handlers can be in the form of a function, an array of functions, or combinations of both, as shown in the following examples.
A single callback function can handle a route. For example:
</p>
<p dir="auto">  

```
  //add a middleware by callbacks
  app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
  next()
  }, (req, res) => {
    res.send('Hello from B!')
  })
```
<br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%209/resources/r6.png?raw=true" width ="100%"/>
<br><br>
<img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%209/resources/r7.png?raw=true" width ="100%"/>
</p>
</p>
</details>



