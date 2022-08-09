//require express module
const express = require('express');

//instance express
const app = express();


app.use("/", (req, res) => {
    res.jsonp({ user: 'edwin' })
    // => foo({ "user": "tobi" })
});

//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});