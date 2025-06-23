import { model, Schema } from "mongoose";


const productSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    stock: {
        type: Number
    },
    reviews: [
        {
            type :String

        }
    ],
    status: {
        type: String,
        default: "pending"
    }
})

const Product = model('products', productSchema)
export default Product