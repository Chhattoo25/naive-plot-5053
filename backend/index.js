
const express=require("express")
// const bodyParser=require("body-parser")
const { connection } = require("./config/db")
const fileUpload=require("express-fileupload")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())

const { productsRouter } = require("./routes/products.route")
app.use("/product",productsRouter)

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