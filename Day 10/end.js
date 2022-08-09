//require express module
const express = require('express');

//instance express
const app = express();

//use a middleware before the download, because we want to know
//the guy who is downloading our file through the "download" route
app.use("/", (req, res, next) => {
    console.log("Someone is accessing in ", req.url);
    next();
});

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

//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});