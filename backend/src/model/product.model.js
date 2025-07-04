import mongoose, { model, Schema } from "mongoose";




const productSchema = new Schema({
    productName: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth"
    }
})


const Product = model('product', productSchema)

export default Product
