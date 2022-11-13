const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    picture:String,
    password:String,
    user_type:{type:String,default:"buyer"},
    vendor:{type:String,default:"assign vendor"}
});

module.exports=new mongoose.model('googleData',userSchema);

//module.exports={googleModel};