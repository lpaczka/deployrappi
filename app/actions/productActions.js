const Products = require("../models/Products")

const createProduct = data => {
    return Products.create(data)
};
const getAllProducts = () => {
    return Products.find({})
}
const getProductsByCategory = category => {
    return Products.find({category:category})
}
const deleteProduct = (id) => {
    return Products.findByIdAndDelete(id)
}
module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductsByCategory
}