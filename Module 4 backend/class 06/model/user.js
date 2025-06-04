import { model, Schema } from "mongoose";


const userSchema = new Schema({
    userName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        // required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
})


const User = model('users', userSchema)
export default User