const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    user_type:{type:String,default:"buyer"},
    vendor:{type:String,default:"assign vendor"}
})

const UserModel=mongoose.model("user",userSchema)


module.exports={UserModel}