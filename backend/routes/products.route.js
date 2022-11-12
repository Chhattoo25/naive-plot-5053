const express = require("express");
const productsRouter=express.Router()
const fs=require("fs")
const dotenv=require("dotenv");
const { ProductModel } = require("../models/Product.model");
const { authentication } = require("../middlewares/authentication");
const { autherisation } = require("../middlewares/autherisation");
const { UserModel } = require("../models/User.model");
const { type } = require("os");


productsRouter.get("/",authentication,autherisation,async(req,res)=>{
    const {user_id}=req.body
    const {user_type}=await UserModel.findOne({_id:user_id})
    if(user_type==="seller"){
        const data=await ProductModel.find({user_id:user_id})
        res.send({data})
    }
    else if(user_type==="admin"){
        const data=await ProductModel.find({name:{$regex:name,$options:"i"}}).sort({price:Number(sort)})
        res.send({data})
    }
    else{
        res.send({"msg":"You are Not authorised user "})
    }
})
productsRouter.get("/filter",async(req,res)=>{
    const {type,sub_type,category,sort}=req.query
    const data=await ProductModel.find({$or:[{type:type},{sub_type:sub_type},{category:category}]}).sort({price:Number(sort)})
    res.send({data})
  
})

productsRouter.get("/:id",authentication,autherisation,async(req,res)=>{
           const {id}=req.params
           console.log(id)
           const data=await ProductModel.findOne({_id:id})
           res.send({data})
})

productsRouter.get("/search",async(req,res)=>{
           const {name,title}=req.query
           const data=await ProductModel.find({name:{$regex:name,$options:"i"}}).sort({price:Number(sort)})
           res.send({data})
})

productsRouter.post("/addproduct",authentication,autherisation,async(req,res)=>{
    const {title,type,name,sub_type,category,colour,price,quantity,brand,discription,image1,image2,image3,user_id}=req.body
    const new_product = new ProductModel({
        title,
        type,
        name,
        sub_type,
        category,
        colour,
        price,
        quantity,
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

})


productsRouter.patch("/update/:id",async(req,res)=>{
           const {id}=req.params
           const body=req.body
          res.send({"msg":body})   
})

module.exports={productsRouter}