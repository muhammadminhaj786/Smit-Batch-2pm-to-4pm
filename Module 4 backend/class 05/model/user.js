const { default: mongoose } = require("mongoose");



const userSchema = new mongoose.Schema({
    name:{
        type: String
    }
})

const User = mongoose.model('users',userSchema)

module.exports = User