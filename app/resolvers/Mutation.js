const actions = require("../actions");
const { getUserId } = require("../utils");
const { storeUpload } = require("../utils");

const signup = async (_, args, context, info) => {
    const { createReadStream } = await args.data.profile_image;
    const stream = createReadStream();
    const { url } = await storeUpload(stream);
    args.data.profile_image = url;
    return actions.signup(args.data).then(
        token => { return {"message":"User created successfully", token: token}; }
    ).catch(e => e);
};

const login = (_, args, context, info) => {
    return actions.login(args).then(
        token => { return {"message":"User logged successfully", token: token}; }
    ).catch(e => e);
}

const createStore = async (_,args,context,info) => {
    const { createReadStream } = await args.data.img_store;
    const stream = createReadStream();
    const { url } = await storeUpload(stream);
    args.data.img_store = url;
    return actions.createStore(args.data).then((store)=>{
        return store
    }).catch(e => e);
}

const deleteUser = (_, args, context, info) => {
    return actions.deleteUserById(args.id).then((user)=>{
        if(!user) throw new Error("User does not exist");
        return user
    }).catch(e => e)
}

const addProductToStore = (_,args,context,info) => {
    return actions.addProductToStore(args.id, args.data)
    .then(product => product)
    .catch(err => err)

}

const addProductToStores = (_,args,context,info) => {
    return actions.addProductToStores(args.data)
    .then(product => product)
    .catch(err => err)
}

// const createDelivery = (_, args, context, info) => {
//     return actions.createDelivery(args.data)
//     .then(delivery => delivery)
//     .catch(err => err)
// }

const createProductModel = async (_,args,context,info) => {
    const { createReadStream } = await args.data.img_product;
    const stream = createReadStream();
    const { url } = await storeUpload(stream);
    args.data.img_product = url;
    return actions.createProduct(args.data)
    .then(product => product)
    .catch(err => err)
}

const deleteProductToStore = (_, args, context,info) => {
    return actions.deleteProductToStore()
    .then(store => store)
    .catch(err => err)
}

const deleteProduct = (_,args,context,info) => {
    return actions.deleteProduct(args.id)
    .then(product => product)
    .catch(err => err)
}

module.exports = {
    signup,
    login,
    createStore, 
    deleteUser,
    addProductToStore,
    addProductToStores,
    createProductModel,
    deleteProductToStore,
    deleteProduct
}