//require express module
const express = require('express');

//instance express
const app = express();

//use a middleware before the download, because we want to know
//the guy who is downloading our file through the "download" route
app.use("/download", (req, res, next) => {
    console.log("Someone is accessing to our file to download...");
    next();
});

//create a new route named "download" that send a response a file
app.get("/download", (req, res) => {
    const file = `${__dirname}/resources/git_sheets.pdf`;
    res.download(file)
});

//start the server
app.listen(3000, () => {
    console.log(`Server on port 3000`)
});