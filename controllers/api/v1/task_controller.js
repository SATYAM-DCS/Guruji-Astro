const Task = require('../../../models/task');


module.exports.createTask=async function(req,res){
    try{
        
        
        let task = await Task.create({
            task:req.body.task,
            category:req.body.category,
            description:req.body.description,
            status:req.body.status,
            user:req.body.userId
        });
       
       return res.status(201).json({ task })
    }

    catch(err){
        
        return res.status(500).json({message: err.message})

    }
}

module.exports.deleteTask=async function(req,res){
    try{
        
       
        var task = await Task.findById(req.params.id);
        
        
        await task.deleteOne();
        
        return res.status(200).json({
            message: "Task delete successfully",
        })
    }

    catch(err){
       
        return res.status(500).json({message: err.message})
    }
}

module.exports.getAllTasks = async function (req, res) {
    try {
        //find all task
        
        let allTasks = await Task.find({});

        return res.status(200).json({
            message: "All Tasks",
            allTasks
        })
    }

    catch(err){
       
        return res.status(500).json({message: err.message})
    }
}
module.exports.getTask = async function (req, res) {
    try {
       
        //find task by id
        let task = await Task.findById(req.params.id);

        return res.status(200).json({
            message: "task",
            task
        })
    }

    catch(err){
       
        return res.status(500).json({message: err.message})
    }
}

module.exports.updateTask =async function(req,res){
    try{
        
        await Task.findByIdAndUpdate(req.params.id,{
            task:req.body.taskName,
            category:req.body.category,
            description:req.body.description,
            status:req.body.status,
        });
        
        return res.status(200).json({
            message: "Task update successfully",
        })
    }

    catch(err){
        
        return res.status(500).json({message: err.message})
    }
}