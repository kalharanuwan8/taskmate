import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database.js';
import tasks from './Routes/tasks.js'
import router from './Routes/login.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/tasks", tasks);
app.use("/login", router)

app.listen(PORT, ()=>
{
    console.log(`http://localhost:${PORT}`)
})
