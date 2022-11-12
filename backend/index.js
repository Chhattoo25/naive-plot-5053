const passport =require('passport')
const express=require("express")
const { connection } = require("./config/db")

const fileUpload=require("express-fileupload")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
require('./config/google-outh');



const {userRouter}=require("./routes/users.route")
app.use("/user",userRouter)

const { productsRouter } = require("./routes/products.route")
app.use("/product",productsRouter)

app.get('/',(req,res)=>{
    res.send("Homepage2")
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.redirect('/');
  });

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