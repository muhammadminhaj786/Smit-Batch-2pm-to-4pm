import mongoose from "mongoose"



const connectDB = async()=> {
    try {

        const connect = await mongoose.connect(process.env.MONODB_URI)
        console.log('mongodb connected')
        
    } catch (error) {
        console.log('mongo db not connected', error.message)
    }
}

export default connectDB