import Product from "../model/product.js"



export const createProduct = async (req,res)=> {
    try {

      const product = new Product(req.body)
      await product.save()

      if(!req.body.name){
        return res.status(401).json({
          message: "required field is missing"
        })
      }

      return res.status(201).json({
        message: "Product is created",
        product
      })
        
    } catch (error) {
        return res.status(500).json({
            message : "An error occurred while creating product",
            error: error.message
        })
    }
}
