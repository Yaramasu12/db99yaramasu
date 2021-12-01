const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    count: {type:Number,min:1,max:3000},
    location: {type:String,length:8},
    name: String  
    
})
module.exports = mongoose.model("Animal",
    animalSchema)