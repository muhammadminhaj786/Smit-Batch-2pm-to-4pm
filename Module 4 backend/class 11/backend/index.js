import express from 'express'

import mongoose from 'mongoose'
import Product from './model/product.js'
import cors from "cors"


const app =express()
const PORT = 8080

//middleware
app.use(express.json())
app.use(cors())


//mongo db connect
const DB_URI = ""
mongoose.connect(DB_URI)
mongoose.connection.on('connected', ()=> console.log('mongodb is connected'))
mongoose.connection.on('error', ()=> console.log('mongodb is not connected'))

//create product
app.post('/product',async (req,res)=> {
    try {

      const product = new Product(req.body)
      await product.save()

      if(!req.body.name){
        return res.status(401).json({
          message: "required field is missing"
        })
      }

      return res.status(201).json({
        message: "Product is created",
        product
      })
        
    } catch (error) {
        return res.status(500).json({
            message : "An error occurred while creating product",
            error: error.message
        })
    }
})

//get products
app.get('/products',async (req,res)=> {
  try {

    const products = await Product.find()

    return res.status(200).json(products)
    
  } catch (error) {
    return res.status(500).json({
      message : "An error occurred while getting products",
      error: error.message
  })
  }
})

app.listen(PORT, ()=> {
    console.log('server is running')
})