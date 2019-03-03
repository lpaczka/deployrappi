const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const types = mongoose.Schema.Types;

const StoreSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    img_store:{
        type:String,
        default: "http://silmag.com.ar/wp-content/plugins/ecommerce-product-catalog/img/no-default-thumbnail.png"
    },
    category:{
        type:String,
        enum: ["Sushi", "Hamburguesas", "Tacos", "Vegana","Pizza"]
    },
    pricing_domicile:{
        type:Number,
        default: 0
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: "products"
    }],
    is_active: {
        type: Boolean,
        default: true
    }
},{ "collection": "stores", "timestamps": true})

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString()
}

module.exports = mongoose.model("stores", StoreSchema)