const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String, 
    age : Number,
    breed :String,
    contact :Number,
})

const petModel = mongoose.model("PETS", userSchema);

module.exports = petModel;