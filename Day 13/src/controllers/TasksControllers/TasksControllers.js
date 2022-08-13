//a default list
const Tasks = [{Id:1, description:"learn nodejs", done:false, dueDate:"01/01/2022"}, 
               {Id:2, description:"learn express", done:true, dueDate:"01/01/2021"},
               {Id:3, description:"learn react", done:false, dueDate:"12/05/2022"},
               {Id:4, description:"learn mongo", done:false, dueDate:"01/09/2022"}]


//retrieve the list of tasks
const ListTasks = (req, res) =>{
    //return the list
    res.send(Tasks)
}

//retrieve a task
const GetTask = (req, res) =>{
    //use find in order to find (dah) a item
    const found = Tasks.find((item) => item.Id == req.params.Id);
    if(found == undefined)
        res.send({message:"Item Not found"});

    //return the item that was found
    res.send(found)
}

//exports the functions
module.exports = {ListTasks, GetTask}

