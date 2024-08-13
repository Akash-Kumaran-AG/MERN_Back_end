const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : String,
    email:String, 
    petname:String,
    petage : Number,
    breed :String,
    gender : String,
    contact :Number,
    Imgurl:String,
})

const petModel = mongoose.model("total", userSchema);

module.exports = petModel;