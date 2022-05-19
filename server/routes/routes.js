const productController = require("../controllers/product.controller")
const express = require("express")
let router_api = express.Router()
// Add product
router_api.post("/product/add", productController.addProduct)
// Get product
router_api.get("/product/list", productController.getProduct)
// Edit product
router_api.get("/product/edit/:id", productController.editProduct)
// Update product
router_api.put("/product/update/:id", productController.updateProduct)
// Search product
router_api.get("/product/filter", productController.searchProduct)
// Delete product
router_api.delete("/product/delete/:id", productController.deleteProduct)
module.exports = router_api