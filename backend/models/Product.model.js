const mongoose = require("mongoose")

const productSchema=new mongoose.Schema({
    title:{type:String,required:true,default:"abc"},
    type:{type:String,required:true},
    name:{type:String,required:true},
    sub_type:{type:String,required:true},
    category:{type:String,required:true},
    colour:{type:String,required:true},
    price:{type:Number,required:true},
    offprice:{type:Number,default:0},
    quantity:{type:Number,default:10},
    brand:{type:String,required:true},
    discription:{type:String,required:true},
    image1:{type:String,required:true},
    image2:{type:String,default:"url not added"},
    image3:{type:String,default:"url not added"},
    user_id:{type:String,required:true}

})

const ProductModel=mongoose.model("products",productSchema)


module.exports={ProductModel}