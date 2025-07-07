const { Schema, default: mongoose, model } = require("mongoose");

const loanSchema = new Schema({
  loanType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "loanType",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
  },
  loanAmount: {
    type: String,
  },
  loanTenure: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
  },
  address:{
    type: String
  },
  city:{
    type: String
  },
  state :{
    type: String
  },
  pincode:{
    type: String
  },
  employmentStatus: {
    type: String
  },
  monthlyIncome: {
    type: String
  },
  nic: {
    type: String
  },
  

  payable: {
    type: String,
  },
  loanCategory: {
    type: String,
  },
});

const Loan = model("loan", loanSchema);
export default Loan;
