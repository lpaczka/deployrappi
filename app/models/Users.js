const mongoose = require("mongoose");
const brcypt = require("bcrypt");

const SALT_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    prime:{
        type:Boolean,
        default: false
    },
    gender:{
        type:String,
        enum: ["Male", "Female"]
    },
    deliverys:[{
        type: Schema.Types.ObjectId,
        ref: "deliverys"
    }],
    store_favorite:[{
        type: Schema.Types.ObjectId,
        ref: "stores"
    }],
    profile_image:{
        type:String,
        default:"https://i.stack.imgur.com/l60Hf.png"
    },
    is_active: {
        type: Boolean,
        default: true
    }
},{ "collection": "users", "timestamps": true});

UserSchema.pre("save", function(next){
    let user = this;
    if(!user.isModified("password")) { return next(); }
    brcypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);
        brcypt.hash(user.password, salt, function(err,hash){
            if(err) return next(err);
            user.password = hash;
            next()
        });
    });
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString()
}

module.exports = mongoose.model("users", UserSchema)