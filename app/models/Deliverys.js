const mongoose = require("mongoose");
const Schema = mongoose.Schema

const deliverySchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: "stores"
    },
    rt_assigne:{
        type: String,
        default: "Brian Palazos"
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: "products"
    }],
    method_payment: {
        type: String,
        enum: ["Paypal", "Tarjeta de crédito", "Efectivo"]
    },
    import:{
        cost_products:{
            type: Number
        },
        chargers:{
            type: Number
        }
    }
},{ "collection": "deliverys", "timestamps": true})

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString()
}

module.exports = mongoose.model("deliverys", deliverySchema)
