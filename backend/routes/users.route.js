const express = require("express");
const userRouter=express.Router()
const { UserModel } = require("../models/User.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config()


userRouter.get("/",(req,res)=>{
    res.send({"msg":"welcome to user home"})
})

userRouter.post("/signup", async (req, res) => {
    const {name, email, password,type} = req.body

    const isUser = await UserModel.findOne({email})
    if(isUser){
        res.send({"msg" : "User already exists, try logging in"})
    }
    else {
        bcrypt.hash(password, 4, async function(err, hash) {
        if(err){
            res.send({"msg":"Something went wrong, please try again later"})
        }
        const new_user = new UserModel({
            name,
            email,
            password : hash,
            type
        })
        try{
            await new_user.save()
            res.send({"msg" : "Sign up successfull"})
        }
        catch(err){
            res.send({"msg" : "Something went wrong, please try again"})
        }
    });
}

})


userRouter.post("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email})
    const hashed_password = user.password;
    const user_id = user._id;
    bcrypt.compare(password, hashed_password, function(err, result) {
          if(err){
            res.send({"msg" : "Something went wrong, try again later"})
          }
          if(result){
            const token = jwt.sign({user_id}, process.env.SECRET_KEY);  
            res.send({"message" : "Login successfull", "token":token})
          }
          else{
            res.send({"msg" : "Login failed"})
          }
    });
})


module.exports={userRouter}