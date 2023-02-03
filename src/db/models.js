const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    name:String,
    pwd:String
})


const User = mongoose.model('User', userSchema)


const itemSchema = mongoose.Schema({
    name:String,
    label:String,
    quantity:Number,
    price:Number
})
const Item = mongoose.model('Item', itemSchema)



module.exports = {User, Item};