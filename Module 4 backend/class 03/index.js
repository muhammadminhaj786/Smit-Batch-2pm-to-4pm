import express from "express"
import mongoose from "mongoose"
import Product from "./model/product.js"

//intillize express in app variable
const app = express()
const PORT = 5000

app.use(express.json())

// C => create =>post
// R => read  => get
// U => update => put
// D => delete  =>delete

console.log('hello')

//mongodb connect
const mongoDB = ""
mongoose.connect(mongoDB)
mongoose.connection.on('connected',()=>console.log('mongo db connectd'))
mongoose.connection.on("error",(err)=>console.log(err.message))

app.get('/minhaj',(request,response)=>{
    console.log('server is up')
    response.send("hello world")
})

app.post('/product',(request,response)=>{
    console.log(request.body)

    try {
        const data = Product.create(request.body)
    } catch (error) {
        console.log(error.message)
    }


})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})