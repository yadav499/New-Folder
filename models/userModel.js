const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "pls provide username"]
    },
    email:{
        type:String,
        required:[true, "pls provide email"],
        unique:true
    },
    organisation:{
        type:String, 
        required:[true, "pls provide organisations name"],
    },
    phoneNo:{
        type:Number,
        required:[true, "pls provide phone number"]
    },
    message:{
        type:String,
        required:[true, "pls provide message"]
    }
   
})

const userModel = new mongoose.model("user", userSchema);
module.exports = userModel;