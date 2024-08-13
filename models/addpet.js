const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    petname:String,
    breed:String,
    petage:Number,
    contact:Number,
    petgender:String,
})

const addpetModel = mongoose.model("newpet", userSchema);

module.exports = addpetModel;