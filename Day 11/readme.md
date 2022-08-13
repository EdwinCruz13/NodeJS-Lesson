# NodeJS-Lesson - Express

<details open="">
  <summary><h2>✨ Express - Routers</h2></summary>
    <p dir="auto">
        A router object is an isolated instance of middleware and routes. You can think of it as a "mini-application" capable only of performing middleware and routing functions. Every Express application has a built-in app router. A router behaves like middleware itself, so you can use it as an argument to *app.use()* or as the argument to another router’s use() method.
    </p>

<p>

- [x]  Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application. For example:
```
// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', function (req, res, next) {
  // ..
})
```
</p>
</details>


<details open="">
  <summary><h2>🃏 Example</h2></summary>
    <p dir="auto">
        Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
        </br>
        The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.
    </p>

<p>

- [x]  Create a project using the console
```
npm init -y
```
- [x]  After, install express
```
npm install express
```
- [x]  Create a new file named "MyPage.js", let's modularize our app and then add the next instructions:
```
//require express
const express = require('express')
//this way you can create a router
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('This is my home page')
})
// define the about page route
router.get('/about', (req, res) => {
  res.send('This is the about page')
})

//exporte the module
module.exports = router
```
- [x]  Create a new file named "index.js", and require our module "MyPage", add the next instrucction and execute
```
//require express module
const express = require('express');
//require the router "MyPage"
const HomePage = require('./MyPage');


//instance express
const app = express();


//use the router through the route "/"
app.use("/", HomePage);


//start the server on port 3000
app.listen(3000, ()=>{
    console.log(`Working on port 3000`);
});
```
```
node index.js
```
- [x]  Finally, go to your browser and load http://localhost:3000/ and http://localhost:3000/about
  <br> <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%2011/resources/day11_0.png?raw=true" width ="100%"/>
  <br> <br>
  <img src="https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%2011/resources/day11_1.png?raw=true" width ="100%"/>
</p>
</details>

