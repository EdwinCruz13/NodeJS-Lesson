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
    **Below is a table summarizing recommended return values of the primary HTTP methods in combination with the resource URIs:**
    <figure class="table">
      <table>
        <tbody>
          <tr>
            <td><p style="text-align:center">HTTP Verb</p></td>
            <td><p style="text-align:center">CRUD</p></td>
            <td><p style="text-align:center">Description</p></td>
            <td><p style="text-align:center">Example</p></td>
            <td><p style="text-align:center">Exit</p></td>
          </tr>
          <tr>
            <td>POST</td>
            <td>Create</td>
            <td>The POST verb is most-often utilized to **create** new resources. In particular, it's used to create subordinate resources. 
                In other words, when creating a new resource, POST to the parent and the service takes care of associating the new resource with the parent, assigning an ID (new resource URI), etc</td>
            <td>POST http://www.example.com/customers</td>
            <td>404 (Not Found), 409 (Conflict) if resource already exists</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>Read</td>
            <td>The HTTP GET method is used to **read** or retrieve a representation of a resource.
                GET returns a representation in XML or JSON and an HTTP response code of 200 (OK)</td>
            <td>GET http://www.example.com/customers/12345</td>
            <td>200 (OK), single customer. 404 (Not Found), if ID not found or invalid</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>Update/Replace</td>
            <td>PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with 
                the request body containing the newly-updated representation of the original resource.</td>
            <td>PUT http://www.example.com/customers/12345</td>
            <td>200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid</td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td>Update/Modify</td>
            <td>PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource</td>
            <td>PATCH http://www.example.com/customers/12345</td>
            <td>200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid</td>
          </tr>
           <tr>
            <td>DELETE</td>
            <td>Delete</td>
            <td>DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.</td>
            <td>DELETE http://www.example.com/customers/12345</td>
            <td>200 (OK). 404 (Not Found), if ID not found or invalid</td>
          </tr>
        </tbody>
      </table>
    </figure>
  </p>
  <p dir="auto">

- [x] A route method is derived from one of the HTTP methods, and is attached to an instance of the express class. The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.
```
// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
```
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
  <br>
   **Now, you can exceed and make a complex route like this**
  <br>

  ```
  //define a route, then define a parameter names as "userId" and "bookID", those parameters can be reached through "req.params" syntanx:
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


