const express = require('express');
const cors = require("cors")
const {  mongoose } = require('mongoose');
require('./config/db')

require('dotenv').config()
const app =express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4001;

const userScema =new mongoose.Schema(
    
        {email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }}

        
    
)

const userModel = new mongoose.model("Registration",userScema);




app.get('/',(req,res)=>{
    res.send("homepage")
})

app.post('/add',async(req,res)=>{
    const user=req.body
    const newUser = new userModel(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
        
    } catch (error){
        res.status(409).json({ message: error.message});     
    }   
})

app.listen(PORT,()=>{
    console.log(`Connection Successful on Port${PORT}`)
})