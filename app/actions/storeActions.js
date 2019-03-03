const Stores = require("../models/Stores")

const createStore = (data) => {
    return Stores.create(data);
}

const getStores = () => {
    return Stores.find({is_active:true}).populate("products")
}

const getStoresByCategory = category => {
    return Stores.find({category: {$in: category}, is_active: true}).populate("products")
}
const addProductToStore = (id, product) => {
    return Stores.findByIdAndUpdate(id, {$push: {products: product}}, {new: true})
}
const addProductToStores = product => {
    return Stores.updateMany({}, {$push: {products: product}}, {new: true})
}
const deleteProductToStore = () => {
    return Stores.updateMany({}, {$set: {products: []}}, {new: true})
}

module.exports = {
    createStore,
    getStores,
    getStoresByCategory,
    addProductToStore,
    addProductToStores,
    deleteProductToStore
}