import express from 'express'
import dotenv from 'dotenv'
import User from '../models/tasksSchema.js'

dotenv.config();
const tasks = express.Router();
tasks.use(express.json());

tasks.post("/", async (req, res) => {
    const { description } = req.body;
    
    if (!description) {
        return res.status(400).json({ error: "Task description is required" });
    }

    try {
        const newTask = new User({ description });
        const savedTask = await newTask.save();
        return res.status(201).json({ success: true, task: savedTask });
    } catch (error) {   
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

tasks.get("/", async (req, res) => {
    try {
        const allTasks = await User.find();
        return res.status(200).json({ tasks: allTasks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

tasks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedTask = await User.findOneAndDelete({ _id: id });
        if (!deletedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        return res.status(200).json({ 
            success: true, 
            message: "Task deleted successfully",
            task: deletedTask 
        });
    } catch (error) {
        console.error("Delete error:", error);
        return res.status(500).json({ error: error.message });
    }
});

tasks.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    
    if (!description) {
        return res.status(400).json({ error: "Task description is required" });
    }

    try {
        const updatedTask = await User.findByIdAndUpdate(
            id, 
            { description }, 
            { new: true, runValidators: true }
        );
        
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        return res.status(200).json({ success: true, task: updatedTask });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

tasks.get("/favorite", async (req, res) => {
    try {
        const favoriteTasks = await User.find({ favorite: true });
        return res.status(200).json({ tasks: favoriteTasks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}); 

export default tasks;