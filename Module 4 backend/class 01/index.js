const express = require('express')
// import express from 'express'

//1 
const app = express()
console.log(app)

//2
const PORT = 5000


//4
app.get('/',(request,response)=>{
    // console.log('hello world')

    const send = {
        message: 'true'
    }
    response.json(send)
})


//3
app.listen(PORT,(error)=>{
    console.log(`server is running on this port ${PORT}`)
})

