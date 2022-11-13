const express = require("express");
const { CartModel } = require("../models/cart.model.js");
const { ProductModel } = require("../models/Product.model");
const cartsRouter=express.Router()


cartsRouter.get("/",async(req,res)=>{
           const data=await CartModel.find()
           res.send({"data":data})
})

cartsRouter.post("/addtocart", async(req,res)=>{
    const {user_id,product_id,quantity}=req.body
    const data=await ProductModel.findOne({_id:product_id})
    const new_product = new CartModel({
        title:data.title,
        gender:data.gender,
        name:data.name,
        sub_type:data.sub_type,
        category:data.sub_type,
        colour:data.colour,
        price:data.price,
        quantity:quantity,
        brand:data.brand,
        discription:data.discription,
        image1:data.image1,
        image2:data.image2,
        image3:data.image3,
        user_id:user_id
    })
    await new_product.save()
    res.send({"new_product":new_product})
})



module.exports={cartsRouter}