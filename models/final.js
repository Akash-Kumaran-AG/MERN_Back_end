const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String, 
    email :String,
    contact :Number,
    Like : String,
})

const finalModel = mongoose.model("Contact", userSchema);

module.exports = finalModel;