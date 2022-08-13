//require express module
const express = require('express');
//reequire the router
const HomePage = require('./MyPage');


//instance express
const app = express();


//use my router through the route "/"
app.use("/", HomePage);


//start the server on port 3000
app.listen(3000, ()=>{
    console.log(`Working on port 3000`);
});