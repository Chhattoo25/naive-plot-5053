const express = require("express");
const productsRouter=express.Router()
const fs=require("fs")
const dotenv=require("dotenv");
const { ProductModel } = require("../models/Product.model");
const { authentication } = require("../middlewares/authentication");
const { autherisation } = require("../middlewares/autherisation");

productsRouter.get("/",async(req,res)=>{
    const data=await ProductModel.find()
    res.send({data:data})
})

productsRouter.get("/:user_id",async(req,res)=>{
    const {user_id}=req.params
    const data=await ProductModel.findOne({user_id:user_id})
    res.send({data:data})
})

productsRouter.post("/addproduct",authentication,autherisation,async(req,res)=>{
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
    // console.log(new_product)
    res.send({new_product})
})

productsRouter.delete("/delete/:id",authentication,autherisation,async(req,res)=>{
    const {id}=req.params
    const data=await ProductModel.findOne({_id:id})
    if(data){
        await ProductModel.deleteOne({_id:id})
        res.send({"msg":"product is deleted","data":data})
    }
    else{
        res.send({"msg":"product not exist more"})   
    }
    console.log(data)
})


productsRouter.patch("/update/:id",authentication,autherisation,async(req,res)=>{
           const {id}=req.params
           const body=req.body
          res.send({"msg":body})   
})

module.exports={productsRouter}