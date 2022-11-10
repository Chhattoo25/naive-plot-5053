
const express=require("express")
// const bodyParser=require("body-parser")
const { connection } = require("./config/db")
const fileUpload=require("express-fileupload")
const {UserModel}=require("./models/UserModel");
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())



const { productsRouter } = require("./routes/products.route")
app.use("/product",productsRouter)

//###Adding Signup userdata_shankar kumar####
app.post('/add',async(req,res)=>{
    const user=req.body
    const newUser = new UserModel(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
        
    } catch (error){
        res.status(409).json({ message: error.message});     
    }   
})
//###ending Signup userdata_shankar kumar####

app.listen(8000,async()=>{
    try{
        await connection
        console.log("connected to db successfully")
    }
    catch(err){
        console.log("error to connect db")
        console.log(err)
    }
})