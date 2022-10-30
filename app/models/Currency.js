const mongoose = require('mongoose')
const { Schema } = mongoose

const currencySchema = new Schema({

    base: {
        type: String
    },
    date: {
        type: String
    },
    rates: {
        type : Object
    }
})
const Currency = mongoose.model('Currency', currencySchema)

module.exports = Currency