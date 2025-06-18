import { model, Schema } from "mongoose";



const userSchema = new Schema({
    name: {
        type:String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    phoneNo: {
        type: String
    }
})

const User = model("signup", userSchema)
export default User