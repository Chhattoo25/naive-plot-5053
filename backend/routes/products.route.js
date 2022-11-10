const express = require("express");
const productsRouter=express.Router()
const fs=require("fs")
const dotenv=require("dotenv");
const { ProductModel } = require("../models/Product.model");
const { authentication } = require("../middlewares/authentication");
const { autherisation } = require("../middlewares/autherisation");

productsRouter.get("/",(req,res)=>{
    res.send("welcome to products")
})


productsRouter.post("/addproducts",authentication,autherisation,async(req,res)=>{
    const {title,type,name,sub_type,category,colour,price,brand,discription,image1,image2,image3,user_id}=req.body
    const new_product = new ProductModel({
        title,
        type,
        name,
        sub_type,
        category,
        colour,
        price,
        brand,
        discription,
        image1,
        image2,
        image3,
        user_id:user_id
     })
     await new_product.save()
     res.send({new_product})
})


module.exports={productsRouter}