import { Schema,model } from "mongoose";




const loanTypeSchema = new Schema({
    loanType: {
        type: String
    },
    pusrpose: {
        type: String
    },
    limit: {
        type: String
    }
})



const LoanType = model('loanType', loanTypeSchema)

export default LoanType