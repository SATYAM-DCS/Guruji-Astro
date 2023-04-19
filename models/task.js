const mongoose = require('mongoose');
//create schema 
const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status: {
        type: String,
        required: true,
        enum: ['Completed', 'Pending'],
        default:'Pending',
    },
    category:{
        type:String,
    },
    description:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Task = mongoose.model('Task',taskSchema);

module.exports=Task;
