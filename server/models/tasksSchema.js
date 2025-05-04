import mongoose from 'mongoose'

const taskschema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('todolist', taskschema)

export default Task;