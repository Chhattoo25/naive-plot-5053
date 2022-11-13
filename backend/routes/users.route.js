const express = require("express");
const userRouter=express.Router()
const { UserModel } = require("../models/User.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {autherisation} =require('../middlewares/autherisation')
require("dotenv").config()

const app=express();

const cookieparser = require("cookie-parser");
app.use(cookieparser());


userRouter.get("/",(req,res)=>{
    res.send({"msg":"welcome to user home"})
})

userRouter.post("/signup", async (req, res) => {
    const { email, password} = req.body

    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        // this.tokens =await this.tokens.concat({ token: token })
        console.log(`token=${token}`)

    const isUser = await UserModel.findOne({email})
    if(isUser){
        res.send({"msg" : "User already exists, try logging in"})
    }
    else {
        bcrypt.hash(password, 4, async function(err, hash) {
        if(err){
            res.send({"msg":"Something went wrong, please try again later"})
        }
        
        const new_user = new UserModel({
            // name,
            token,
            email,
            password : hash,
            // type
        })
<<<<<<< HEAD
        
        
        // const token = await UserModel.generateAuthToken();
=======
        const token = await registerEmployee.generateAuthToken();
            console.log("the token part" + token);
>>>>>>> 42d4481163930600a229e72e19ecc6bd4b85438f

        // res.cookie("jwt", token, {
        //     expires: new Date(Date.now() + 30000),
        //     httpOnly: true
        // });


        
        try{


            await new_user.save()
            res.send({"msg" : "Sign up successfull"})
        }
        catch(err){
            res.send({"msg" : "Something went wrong, please try again"})
        }
    });
 }

})


userRouter.post("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email})
    const hashed_password = user.password;
    const user_id = user._id;
    bcrypt.compare(password, hashed_password, function(err, result) {
          if(err){
            res.send({"msg" : "Something went wrong, try again later"})
          }
          if(result){
            const token = jwt.sign({user_id}, process.env.SECRET_KEY);  
            res.send({"message" : "Login successfull", "token":token})
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 30000),
                httpOnly: true,
                //secure:true
            });
            

          }
          else{
            res.send({"msg" : "Login failed"})
          }
    });
})


// app.get("/logout", autherisation,async(req,res)=>{
//     try {
//         console.log(req.user);
// // logout from only one device
//         req.user.tokens =req.user.tokens.filter((currElement)=>{
//             return currElement.token !== req.token
//         })
// //logout from all devices like netflix
//         req.user.tokens = [];

//         res.clearCookie("jwt");
//         console.log("logout successfully");

//         await req.user.save();
//         res.render("login");
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

module.exports={userRouter}