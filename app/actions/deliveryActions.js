const Deliverys = require("../models/Deliverys")

const createDelivery = (data) => {
    return Deliverys.create(data);
}

module.exports = {
    createDelivery
}