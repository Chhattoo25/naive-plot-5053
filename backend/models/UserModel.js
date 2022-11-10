const mongoose = require('mongoose')

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

 const UserModel = new mongoose.model("Registration",userScema);
 module.exports={UserModel}