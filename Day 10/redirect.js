//require express module
const express = require('express');

//instance express
const app = express();


app.get("/", (req, res) => {
    res.redirect('/aboutus')
});

app.use("/aboutus", (req, res) => {
    res.json({ user: 'edwin', pass:'****', email: 'edwin@gmail.com' })
});

//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});