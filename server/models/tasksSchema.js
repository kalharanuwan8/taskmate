import mongoose from 'mongoose'

const userschema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const User = mongoose.model('todolist', userschema)

export default User;