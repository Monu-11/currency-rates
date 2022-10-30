const express = require('express')
const router = express.Router()
const userCltr = require('../app/controllers/userCltr')
const currencyCltr = require('../app/controllers/currencyCltr')

router.post('/api/users/register',userCltr.register)
router.get('/api/currencies',currencyCltr.show)

module.exports = router