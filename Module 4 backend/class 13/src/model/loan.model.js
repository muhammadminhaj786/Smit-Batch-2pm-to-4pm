
const { Schema, default: mongoose, model } = require("mongoose");



const loanSchema = new Schema ({
    loanId:{
        type:Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth"
    },
    loanAmount: {
        type: String
    },
    month: {
        type: String
    },
    payable: {
        type: String
    },
    loanCategory: {
        type: String
    }
})



const Loan = model('loan', loanSchema)
export default Loan