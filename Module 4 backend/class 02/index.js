// const express = require('express')
import express from 'express'
import mongoose from 'mongoose'

//intilize express
const app = express()
// console.log(app)

//create port
const PORT = 5000

//body parse
app.use(express.json())

//response 
app.get('/',(request,response)=>{
    response.send('hello')
})

app.post('/product',(request,response)=>{
    console.log(request.body)
})

//mongodb connect

const connection = mongoose.connect("mongodb+srv://eb20103087minhajwahid:minhaj@cluster0.zrapdmx.mongodb.net/")
.then(()=>console.log('mongodb connected'))
.catch((error)=>console.log(error.message))





app.listen(PORT,()=>{
    console.log(`server is running on this port ${PORT}`)
})

