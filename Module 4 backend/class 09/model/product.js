import { model, Schema } from "mongoose";


const productSchema = new Schema({
    name: {
        type: String
    },
    price :{
        type :Number
    },
    description: {
        type: String
    },
    stock: {
        type :Number
    },
    reviews:[
        {
            type: String
        }
    ]
})

const Product = model("products", productSchema)

export default Product