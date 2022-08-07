//require the express module
const express = require('express');

//instance express object
const app = express();

//use a get request
app.get("/", (req, res) => {
    res.send("Hello world")
});


//execute the express framework
app.listen(3000, () => {
    console.log(`Server on port 3000`)
})