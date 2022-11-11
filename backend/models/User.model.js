const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");


const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    user_type:{type:String,default:"buyer"},
    vendor:{type:String,default:"assign vendor"}
})

// generating tokens
userSchema.methods.generateAuthToken = async function(){
    try {
        console.log(this._id);
        const token = jwt.sign({_id:this._id.toString( ) }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        //console.log(token);
        return token;
    } catch (error) {
        resizeBy.send("the error part" + error);
        console.log("the error part" + error)
    }
}

const UserModel=mongoose.model("user",userSchema)


module.exports={UserModel}