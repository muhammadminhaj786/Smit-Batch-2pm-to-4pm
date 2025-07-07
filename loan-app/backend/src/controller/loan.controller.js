import Loan from "../model/loan.model.js"




export const createLoan = async(req,res)=>{
    try {

       const loan = await Loan.create(req.body)

       return res.status(201).json({
        message: " Apply loan successfully",
        loan
       })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while applying loan",
            error:error.message
        })
    }
}


export const getLoan = async(req,res)=>{
    try {

       const loan = await Loan.find()

       return res.status(200).json({
        loan
       })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while fetching loan",
            error:error.message
        })
    }
}

export const deleteLoan = async(req,res)=>{
    try {

        const {id} = req.params

       const loan = await Loan.findByIdAndDelete(id)

       return res.status(201).json({
        message: " Apply loan deleted",
  
       })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while deleting loan",
            error:error.message
        })
    }
}


export const updateLoan = async(req,res)=>{
    try {

        const {id} = req.params

       const loan = await Loan.findByIdAndUpdate(id,req.body,{
        new: true
       })

       return res.status(201).json({
        message: " Apply loan updated successfully",
        loan
       })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while updating applying loan",
            error:error.message
        })
    }
}