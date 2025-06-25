import { model, Schema } from "mongoose";


const productSchema = new Schema ({


    name: {
        type: String
    },
    price: {
        type: Number
    }


})


const Product = model('products', productSchema)

export default Product