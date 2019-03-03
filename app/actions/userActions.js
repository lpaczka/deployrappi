const User = require("../models/Users");

const createUser = (data) => {
    return User.create(data);
}

const getUserByEmail = (email) => {
    return User.findOne({email:email})
}

const addDeliveryToUser = (id, delivery) => {
    return User.findByIdAndUpdate(id, {$push: {deliverys:delivery}}, {new:true});
}

const getUserById = (id) => {
    return User.findOne({_id: id, is_active: true}).select("-password").populate("deliverys");
}

const getAllUsers = () => {
    return User.find({is_active:true}).select("-password").populate("deliverys");
}

const deleteUserById = (id) => {
    return User.findByIdAndUpdate({_id:id, is_active:true}, {$set:{is_active:false}}, {new:true} )
}

module.exports = {
    createUser,
    getUserByEmail,    
    addDeliveryToUser,
    getUserById,
    getAllUsers,
    deleteUserById
}