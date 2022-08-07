//require the express module
const express = require('express');

//instance express object
const app = express();

//defining a middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

//use a get request
app.get("/", (req, res) => {
    res.send("Hello world")
});

//use a get request in order to get a route
app.get('/home', (req, res) => {
    res.send('Hello world from home');
});


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







//define a route, then define a parameter names as "userId" and "bookID", those parameters can be reached through "req.params" syntanx:
app.get(`/users/:userId/books/:bookId`, (req, res) => {
    var params = req.params;
    res.send(`Hello world from users/book: the userId entered is ${params.userId} and bookId is ${params.bookId}`);
});


//execute the express framework
app.listen(3000, () => {
    console.log(`Server on port 3000`)
})