import mongoose from "../../../common/database/mongoose.db.js";


const { Schema, model } = mongoose
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const ProductModel = model('products', ProductSchema)

export default ProductModel