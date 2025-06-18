
import express from "express"
import mongoose from "mongoose"
import Product from "./model/product.js"


const app = express()
const PORT = 8080

app.use(express.json())

const DB_URI = ""
mongoose.connect(DB_URI)
mongoose.connection.on("connected", ()=>console.log('mongodb is connected'))
mongoose.connection.on("error", ()=>console.log('mongodb is not connected'))



app.get('/up', (req,res)=> {
    res.send("hello")
})

//crud

// post
app.post('/product', async (req,res)=> {
    try {

        const product = new Product(req.body)
        await product.save()

        return res.status(201).json({
            message :"product is created",
            product
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating a product",
            error: error.message
        })
    }
})

// get
app.get('/product', async (req,res)=> {
    try {

        const products = await Product.find()

        return res.status(200).json(products)
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while getting a product",
            error: error.message
        }) 
    }
})


//delete
// app.delete('/product',async (req,res)=> {
//     try {

//         const {_id} = req.body

//         const product = await Product.findByIdAndDelete(_id)
//         return res.status(200).json({
//             message:"Product is deleted"
//         })
        
//     } catch (error) {
//         return res.status(500).json({
//             message: "An error occurred while deleting a product",
//             error: error.message
//         })
//     }
// })


app.delete('/product/:id',async (req,res)=> {
    try {

        const {id} = req.params
    

        const product = await Product.findByIdAndDelete(id)
        return res.status(200).json({
            message:"Product is deleted"
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while deleting a product",
            error: error.message
        })
    }
})


app.put('/product/:id',async (req,res)=> {
    try {

        const product = await Product.findByIdAndUpdate()
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while updating a product",
            error: error.message
        })
    }
})

app.listen(PORT, ()=>{
    console.log('server is running')
})