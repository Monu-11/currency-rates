const Currency = require('../models/Currency')
const axios = require('axios')
const currencyCltr = {}

currencyCltr.show = (req, res) => {
    axios.get('https://api.apilayer.com/exchangerates_data/latest?symbols=INR,EUR,AED,RUB,AUD&base=USD', {
        headers: {
            'apikey': 'oBLTAK0ZGxPEEMscFPBaymcOaWhPBDVr'
        }
    })
        .then((response) => {
            const result = response.data
            const currency = new Currency({ base : result.base , rates : result.rates, date : result.date })
            currency.save()
                .then((curr) => {
                    res.json(curr)
                })
                .catch((err) => {
                    res.json(err)
                })

        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports = currencyCltr