import Product from "../model/product.model.js"




export const createProduct = async (req,res)=> {
    try {


        const product = await Product.create(req.body)

        return res.status(201).json({
            message: "Product created",
            data: product
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating a product",
            error: error.message
        })
    }
}

export const getProduct = async (req,res)=> {
    try {


        const product = await Product.find().populate({
            path: 'user',
            select: 'username email'
        })

        return res.status(200).json({
           
            data: product
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while getting a product",
            error: error.message
        })
    }
}