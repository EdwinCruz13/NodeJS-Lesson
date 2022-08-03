//require express module
const express = require('express');

//instance a new object with express
const app = express();

//define a main route
app.get("/", (req, res) => {
    res.send("Hello world")
})

//execute the express framework
app.listen(3000, () => {
    console.log(`Server on port 3000`)
})
