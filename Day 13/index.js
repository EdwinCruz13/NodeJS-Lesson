//require express module
const express = require('express');
//reequire the routes
const tasksRouters = require('./src/routes/TasksRoutes');


//instance express
const app = express();

//make a middleware
app.use("/", (req, res, next) =>{
    //console.log('the user is accessing on route', req.url);
    next();
});
app.use(express.json());
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//define some routes
app.use("/api/Tasks/", tasksRouters);






//start the server on port 3000
app.listen(3000, ()=>{
    console.log(`Working on port 3000`);
});