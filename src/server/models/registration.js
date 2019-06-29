const mongoose = require("mongoose");


const regSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Registration', regSchema);