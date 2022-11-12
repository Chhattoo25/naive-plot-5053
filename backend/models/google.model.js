const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    email:String,
    name: String,
    url: String,
    password:String,
    user_type:{type:String,default:"buyer"},
    vendor:{type:String,default:"assign vendor"}
});

const googleModel =new mongoose.model('googleData',userSchema);

module.exports={googleModel};