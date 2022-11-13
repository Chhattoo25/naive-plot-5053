const mongoose = require("mongoose")

const cartSchema=new mongoose.Schema({
    title:{type:String},
    gender:{type:String},
    name:{type:String},
    sub_type:{type:String},
    category:{type:String},
    colour:{type:String},
    price:{type:Number},
    offprice:{type:Number},
    quantity:{type:Number},
    brand:{type:String},
    discription:{type:String},
    image1:{type:String},
    image2:{type:String},
    image3:{type:String},
    user_id:{type:String},
    product_id:{type:String}
    

})

const CartModel=mongoose.model("cart",cartSchema)


module.exports={CartModel}