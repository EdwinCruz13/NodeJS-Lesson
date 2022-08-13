//require express module
const express = require("express");
//require the controller
const { ListTasks, GetTask } = require('../controllers/TasksControllers/TasksControllers');

//define a router
const Router = express.Router();

//define a routes of list of tasks
Router.get("/ListTasks", ListTasks);

//define a reoute about a item
Router.get("/GetTask/:Id", GetTask);


//export Routers
module.exports = Router;