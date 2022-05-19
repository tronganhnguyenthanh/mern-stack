const productModel = require("../models/product.model")
module.exports = {
 // Add product  
 addProduct:async (req, res) => {
   try {
    let add_product = new productModel({
      name:req.body.name,
      quantity:req.body.quantity,
      price:req.body.price
    })
    let save_product = await add_product.save()
    res.json(save_product)
   }catch(error){
     res.status(400).json({message:error})  
   }
 },
 // Get product  
 getProduct:async(req, res) => {
   try {
     let product_display = await productModel.find()
     res.json(product_display) 
   }catch(error){
     res.status(400).json({message:error})
  }
 },
 // Edit product  
 editProduct:async (req, res) => {
   try {
     let _id = req.params.id 
     let save_input_data = await productModel.findById(_id)
     res.json(save_input_data)
   }catch(error){
     res.status(400).json({message:error})
   }
 },
 // Update product
 updateProduct:async (req, res) => {
  try {
    let _id = req.params.id
    let update_data = req.body
    let options = {new:true} 
    let updated_product = await productModel.findByIdAndUpdate(_id, update_data, options)
    res.json(updated_product)
  }catch(error){
    res.status(400).json({message:error})
  }
 },
 // Delete product
 deleteProduct:async (req, res) => {
   try {
     let _id = req.params.id
     let deleted_product = await productModel.findByIdAndDelete(_id)
     res.json(deleted_product)
   }catch(error){
     res.status(400).json({message:error})
  }
 }
}