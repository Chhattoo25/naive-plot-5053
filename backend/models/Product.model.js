const mongoose = require("mongoose")

const productSchema=new mongoose.Schema({
    title:{type:String,default:"abc"},
    gender:{type:String,default:"men"},
    name:{type:String,default:"abc"},
    sub_type:{type:String,default:"abc"},
    category:{type:String,default:"abc"},
    colour:{type:String,default:"abc"},
    price:{type:Number,default:100},
    offprice:{type:Number,default:0},
    quantity:{type:Number,default:10},
    brand:{type:String,default:"abc"},
    discription:{type:String,default:"We'll keep our eyes out for you. Subscribe to receive automatic email and app updates to be the first to know when this item becomes available in new stores, sizes or prices."},
    image1:{type:String,default:"abc"},
    image2:{type:String,default:"url not added"},
    image3:{type:String,default:"url not added"},
    user_id:{type:String,required:true}

})

const ProductModel=mongoose.model("products",productSchema)


module.exports={ProductModel}