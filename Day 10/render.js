//require express module
const express = require('express');

//instance express
const app = express();

// View engine setup
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});



//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});