const mongoose = require("mongoose")

const productSchema=new mongoose.Schema({
    title:{type:String,default:"abc"},
    type:{type:String,default:"abc"},
    name:{type:String,default:"abc"},
    sub_type:{type:String,default:"abc"},
    category:{type:String,default:"abc"},
    colour:{type:String,default:"abc"},
    price:{type:Number,required:true},
    offprice:{type:Number,default:0},
    quantity:{type:Number,default:10},
    brand:{type:String,default:"abc"},
    discription:{type:String,default:"abc"},
    image1:{type:String,default:"abc"},
    image2:{type:String,default:"url not added"},
    image3:{type:String,default:"url not added"},
    user_id:{type:String,required:true}

})

const ProductModel=mongoose.model("products",productSchema)


module.exports={ProductModel}