const mongoose = require("mongoose");
const userloginSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Pls provide the name"]
    },
    email:{
        type:String,
        required:[true, "pls provide the email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "pls provide the password "]
        
    }
})
const userloginModel = new mongoose.model("userlogin", userloginSchema);
module.exports = userloginModel;