const authActions = require("./authActions");
const userActions = require("./userActions");
const storeActions = require("./storeActions");
const productsActions = require("./productActions");
const deliveryActions = require("./deliveryActions");

module.exports = {
    ...authActions,
    ...userActions,
    ...storeActions,
    ...deliveryActions,
    ...productsActions
}