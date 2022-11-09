const mongoose = require("mongoose")

const productSchema=new mongoose.Schema({
    title:{type:String,required:true,default:"abc"},
    type:{type:String,required:true},
    category:{type:String,required:true},
    colour:{type:String,required:true},
    price:{type:Number,required:true},
    brand:{type:String,required:true},
    discription:{type:String,required:true},
    image1:{type:String,required:true},
})

const ProductModel=mongoose.model("products",productSchema)


module.exports={ProductModel}