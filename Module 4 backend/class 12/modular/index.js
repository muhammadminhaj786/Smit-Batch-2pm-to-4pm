

import express from 'express'
import cors from 'cors'
import connectDB from './src/config/db.js'
import dotenv from "dotenv"
import productRoutes from './src/routes/product.routes.js'


const app =express()
const PORT = 8080


dotenv.config()

//middleware
app.use(express.json())
app.use(cors())

//connect db
connectDB()

app.use('/api',productRoutes)




app.listen(PORT,()=> {
    console.log('server is running')
})