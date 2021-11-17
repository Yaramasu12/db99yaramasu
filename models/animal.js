const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    count: Number,
    location: String,
    name: String
})
module.exports = mongoose.model("Animal",
    animalSchema)