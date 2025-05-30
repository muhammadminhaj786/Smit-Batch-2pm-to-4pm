const express = require('express')
const { default: mongoose } = require('mongoose')
const Name = require('./model/class')


const app = express()


const DB_URI = ""
mongoose.connect(DB_URI)
mongoose.connection.on("connected",()=>console.log('mongodb connected'))
mongoose.connection.on("error",(error)=>console.log(error.message))



const PORT = 8080

app.use(express.json())



app.get('/', (request,response)=>{
    // console.log('chal gaya')
    response.send('chal gaya')

})

app.post('/', async (request,response)=>{
    console.log(request.body)

   await Name.create(request.body)



    if(request.body.name == 'minhaj' ){

        response.send('ok')

    }else{
        response.send('try again')

    }
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})

