const passport =require('passport')
const express=require("express")
const { connection } = require("./config/db")
const fileUpload=require("express-fileupload")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
require('./config/google-outh');


const authRoutes = require('./routes/google.route')




const {userRouter}=require("./routes/users.route")
app.use("/user",userRouter);

const { productsRouter } = require("./routes/products.route")
app.use("/product",productsRouter)


const { UserModel } = require('./models/User.model')

app.use(authRoutes);

const { cartsRouter } = require("./routes/carts.route.js")
app.use("/cart",cartsRouter)




  

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