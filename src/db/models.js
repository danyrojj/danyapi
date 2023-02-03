const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    name:{type: String, required:[true, 'name is required']},
    pwd:{type:String, required:[true, 'password is required']}
})


const User = mongoose.model('User', userSchema)


const itemSchema = mongoose.Schema({
    name:{type: String, required:[true, 'name is required']},
    category:{type: String, required:[true, 'category is required']},
    quantity:{type: Number, required:[true, 'quantity is required']},
    price:{type: Number, required:[true, 'price is required']}
})
const Item = mongoose.model('Item', itemSchema)



module.exports = {User, Item};