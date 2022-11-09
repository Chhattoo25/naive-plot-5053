const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/AddUser")
.then(()=>{
    console.log("Database connection Successfull")
})
.catch(()=>{
    console.log("Connection Are faild")
})