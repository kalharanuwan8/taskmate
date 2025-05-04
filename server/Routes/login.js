import express, { json } from 'express';
import dotenv from 'dotenv';    
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';

dotenv.config();
const router = express.Router();

//signup
router.post('/signup', async (req, res) => {
    const {email, password} = req.body;
    try{
        const userexist = await User.findone ({email});
        if (userexist) 
            return res.status(400).json ({message: "User already exists"});

        const hashedpass = bcrypt.hash(password, 10);
        const newUser = new User({email, password: hashedpass});
        await newUser.save();
        return res.status(201).json({message: "User Successfully added"})

    } 
    catch(err){
        res.status.(500).json({message: "Server error"});
    }
});

//login
router.post('/', async (req, res)=>
{
    const {email, password} = req,body;
    try{
        const user = await User.findone({email});
        if(!user)
            return res.status(404).json({message: "User not found"})

        const Ismatch = await bcrypt.compare(password, user.password)
        if(!Ismatch)
            return res.status.apply(401).json({message: "Invalid password"})

        const webtoken = jwt.sign({id: user_id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({message: "Login successful", webtoken})
    }
    catch(err)
    {
        return res.status(500),json({message: "Server error"})
    }
})

export default router;