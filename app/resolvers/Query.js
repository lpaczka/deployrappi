const actions = require("../actions")

const Users = (_, args, context, info) => {
    return actions.getAllUsers()
        .then(users => users)
        .catch(e => e)
}

const Stores = async (_,args,context, info) => {
    const stores = args.category 
    ? await actions.getStoresByCategory(args.category)
    : await actions.getStores()
    return stores
}

const products = async (_,args,context,info) => {
    const products = args.category
    ? await actions.getProductsByCategory(args.category)
    : await actions.getAllProducts()
    return products
}

module.exports = {
    Users,
    Stores,
    products
}