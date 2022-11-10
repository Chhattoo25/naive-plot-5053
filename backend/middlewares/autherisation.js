const jwt = require("jsonwebtoken");
require("dotenv").config()
const { UserModel } = require("../models/User.model");

const autherisation=async(req,res,next)=>{
    const {user_id}=req.body
    const {user_type}=await UserModel.findOne({"_id":user_id})
    if(user_type==="seller" || user_type==="admin"){
        next()
    }
    else{
        res.send({"msg":"you are not autherised user"})
    }

}

module.exports={autherisation}