const express = require("express");
const productsRouter=express.Router()
const fs=require("fs")
const dotenv=require("dotenv");
const { ProductModel } = require("../models/Product.model");

productsRouter.get("/",(req,res)=>{
    res.send("welcome to products")
})


productsRouter.post("/upload",(req,res)=>{
    const {title,type,category,colour,price,brand,discription}=req.body
    const file1=req.files.photo
    res.send({"msg":"ki"})
})


module.exports={productsRouter}