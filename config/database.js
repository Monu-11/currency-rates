const mongoose = require('mongoose')

const ConfigureDB = () => {
    mongoose.connect('mongodb://localhost:27017/currency-rates')
           .then(()=>{
            console.log('connected to DB')
           })
           .catch((err)=>{
            console.log('errors in connecting db',err)
           })
}
module.exports = ConfigureDB