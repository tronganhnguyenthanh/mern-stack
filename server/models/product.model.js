const mongoose = require("mongoose")
let Product = new mongoose.Schema({
  name:{
   type:String,
   required:[true, "Please enter your name"] 
  },
  quantity:{
   type:Number,
   required:[true, "Please choose your quantity"]
  },
  price:{
   type:Number,
   required:[true, "Please enter your price"] 
  },
},{
  collection:"products"
})
module.exports = mongoose.model("Product", Product)