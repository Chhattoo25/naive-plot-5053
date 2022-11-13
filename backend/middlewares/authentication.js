const jwt = require("jsonwebtoken");
require("dotenv").config()

const authentication=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(!token){
        res.send("please login")
    }
    const decoded = jwt.verify(token,process.env.SECRET_KEY);
    const user_id=decoded.user_id
     if(decoded){
        req.body.user_id=user_id
         next()
     }
     else{
       res.send("Please Login again")
     }

}

module.exports={authentication}


// const jwt = require("jsonwebtoken");
// const Register = require("../../models/registers");
// //const Register = require("../models/registers");


// const auth = async (req,res,next) =>{
//     try {
//         const token = req.cookies.jwt;
//         const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
//         console.log(verifyUser);

//         const user =await Register.findOne({_id:verifyUser._id});
//         console.log(user.name)

//         req.token = token;
//         req.user = user;
        
//         next();

//     } catch (error) {
//         res.status(400).send(error)
//     }
// }

// module.exports ={auth }
