import ProductModel from "../models/product.schema.js";

const ProductService = {
    create: (payload) => {
        return new ProductModel(payload).save()
    },
    getAll: (query = {}) => {
        return ProductModel.find(query)
    },
    getOne: (id) => {
        return ProductModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return ProductModel.findOneAndUpdate({ _id: id }, { $set: payload })
    },
    deleteById: (id) => {
        return ProductModel.deleteOne({ _id: id })
    }
}

export default ProductService