const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
        name_product: {
            type: String,
            require: true
        },
        description_product:{
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        img_product: {
            type: String,
            default: "http://silmag.com.ar/wp-content/plugins/ecommerce-product-catalog/img/no-default-thumbnail.png"
        },
        category: {
            type: String,
            enum: ["Bebida","Entradas","PlatoFuerte","Postre"],
            required: true
        }
}, { "collection": "products", "timestamps": true})

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString()
}

module.exports = mongoose.model("products", productsSchema)