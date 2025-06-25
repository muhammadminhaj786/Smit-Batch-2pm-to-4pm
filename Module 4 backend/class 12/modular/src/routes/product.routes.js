
import express from "express"
import { createProduct, delProduct, getProducts, updateProduct } from "../controller/product.controller.js"

const productRoutes = express.Router()



productRoutes.post('/product', createProduct)
productRoutes.get('/product', getProducts)
productRoutes.delete('/product', delProduct)
productRoutes.put('/product/:id', updateProduct)





export default productRoutes