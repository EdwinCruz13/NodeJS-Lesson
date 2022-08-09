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


//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});