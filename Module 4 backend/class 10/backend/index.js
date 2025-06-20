import express from 'express'

import mongoose from 'mongoose'
import Product from './model/product.js'


const app =express()
const PORT = 8080

//middleware
app.use(express.json())


//mongo db connect
const DB_URI = "mongodb+srv://eb20103087minhajwahid:minhaj@cluster0.dfn61hb.mongodb.net/"
mongoose.connect(DB_URI)
mongoose.connection.on('connected', ()=> console.log('mongodb is connected'))
mongoose.connection.on('error', ()=> console.log('mongodb is not connected'))

//create product
app.post('/product',async (req,res)=> {
    try {

      const product = new Product(req.body)
      await product.save()

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

app.listen(PORT, ()=> {
    console.log('server is running')
})