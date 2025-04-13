import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>
{
    console.log(`http://localhost:${PORT}`)
})
