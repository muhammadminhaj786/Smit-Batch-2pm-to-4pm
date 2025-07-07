
import express from 'express'
import { createProduct, getProduct } from '../controller/product.controller.js'



const productRoutes = express.Router()

productRoutes.post('/', createProduct)
productRoutes.get('/', getProduct)


export default productRoutes