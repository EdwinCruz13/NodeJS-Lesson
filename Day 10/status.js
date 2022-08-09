//require express module
const express = require('express');

//instance express
const app = express();

// View engine setup
app.set('view engine', 'ejs');


//with middleware
app.use('/', function(req, res, next){
    //res.status(200).send("Status Working");
    next();
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/error", (req, res) => {
    res.status(500);
    res.render('error');
});




//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});

