const { Router } = require("express");

const {ProductModel} = require("../models/Product.model");

const serachRoute = Router();


serachRoute.get("/",async(req,res)=>{
  const data=await ProductModel.find()
  res.send({data:data})
})
serachRoute.get("/search", async (req, res) => {
  try {
    const {name,title,price}=req.query
const page = parseInt(req.query.page)-1 || 0
const limit = parseInt(req.query.limit)||5
    const search = req.query.search || "";
    let sort = req.query.sort || "";
    // const type = ["Beauty"];
    // type === "All" ? (type = [...type]) : (type = req.query.type.split(","));
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[(sort[0] = "asc")];
    }

    // const data = await ProductModel.find({name:{$regex:search,$options:"i"}}).sort(sortBy).skip(page*limit).limit(limit)
    const data=await ProductModel.find({name:{$regex:name,$options:"i"}}).sort({price:Number(sort)})
    res.send({data})
// const total = await ProductModel.countDocuments({
// type:{$in:[...type]},
// name:{$regex:search,$options:"i"}
// })
 const response = {
 error:false,
 page:page+1,
 limit,
 data
 }
 res.status(200).json(response)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
});

module.exports = {
  serachRoute,
};
