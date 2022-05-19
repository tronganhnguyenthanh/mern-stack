const mongoose = require("mongoose")
let Product = new mongoose.Schema({
  name:{
   type:String
  },
  quantity:{
   type:Number
  },
  price:{
   type:Number
  },
},{
  collection:"products"
})
module.exports = mongoose.model("Product", Product)