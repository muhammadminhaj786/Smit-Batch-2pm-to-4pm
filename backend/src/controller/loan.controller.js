import Loan from "../model/loan.model"




export const createLoan = async(req,res)=>{
    try {

        const {loanAmount, payable, user,loanCategory} = req.body

        const month = loanAmount / payable

        const sendloan = {
            loanId: Math.random(1,9),
            user,
            loanAmount,
            month,
            payable,
            loanCategory
        }

        const loan = await Loan.create(sendloan)
        
    } catch (error) {
        
    }
}