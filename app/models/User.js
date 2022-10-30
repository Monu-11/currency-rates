const mongoose = require('mongoose')
const { Schema } = mongoose
const validator = require('validator')

const userSchema = new Schema({
    name : {
        type : String,
        required : [true,'Please Enter Your Name']
    },
    email : {
        type : String,
        required : [true,'Please Enter Your Email'],
        validate : [validator.isEmail,'Please Enter Your valid Email']
    }
})
const User = mongoose.model('User',userSchema)

module.exports = User