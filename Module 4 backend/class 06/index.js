import express from 'express'
import mongoose from 'mongoose'
import User from './model/user.js'


const app = express()
const PORT = 5000

app.use(express.json())


const mongo_uri = ""
mongoose.connect(mongo_uri)
mongoose.connection.on('connected', ()=>console.log('mongodb connected'))
mongoose.connection.on("error", (error)=>console.log(error.message))

app.get('/',(req,res)=>{
    res.send('server is up')
})

//signup
app.post('/create_user', async(req,res)=>{
    
    try {
        // console.log(req.body)

    const {email ,password, phoneNumber} = req.body

    // const email = req.body.email
    // const password = req.body.password
    // const phoneNumber = req.body.phoneNumber
    // console.log(email)
   
    if(!email || !password || !phoneNumber){
        return res.status(400).json({
            status: false,
            message: "required field is missing"
        })
    }

    const existingUser = await User.findOne({email})
    console.log(existingUser)

    if(existingUser){
        return res.status(400).json({
            status: false,
            message: "Email is already exist"
        })
    }

    const user = User.create(req.body)
    return res.send("signup")
        
    } catch (error) {
        return res.status(500).json({
            message: "an error occurred while creating a user",
            error: error.message 
        })
    }
    

})

//login 
app.post('/login', async (req,res)=>{
    try {

        const {email , password} = req.body

        if(!email || !password){
            return res.status(400).json({
                status: false,
                message: "required field is missing"
            })
        }

        const existingUser = await User.findOne({email})
        console.log(existingUser)

        if(!existingUser){
            return res.status(404).json({
                status: false,
                message: "User not found"
            })
        }


        const found = existingUser.password == password
        console.log(found)

        
    } catch (error) {
        return res.status(500).json({
            message: "Am error occurred while login user",
            error: error.message
        })
    }
})


app.listen(PORT,()=>{
    console.log('Server is running ')
})
