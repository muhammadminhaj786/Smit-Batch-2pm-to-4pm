import Product from "../models/product.model.js"



export const createProduct = async (req,res)=> {
    try {

        const product = new Product(req.body)
        await product.save()

        return res.status(201).json({
            message: "product created",
            product
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating a product",
            error: error.message
        })
    }
}


export const getProducts = async (req,res)=> {
    try {

        const product = await Product.find()
      

        return res.status(201).json({
            message: "product created",
            product
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while getting a product",
            error: error.message
        })
    }
}


export const delProduct = async (req,res)=> {
    try {

        const {id} = req.body
        
        const product = await Product.findByIdAndDelete({_id: id})
     
      

        return res.status(201).json({
            message: "product deleted",
            
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while getting a product",
            error: error.message
        })
    }
}

export const updateProduct = async (req,res)=> {
    try {

        const {id} = req.params
        
        const product = await Product.findByIdAndUpdate(id, req.body,{
            new: true
        })
     
      

        return res.status(201).json({
            message: "product updated",
            product
            
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while getting a product",
            error: error.message
        })
    }
}