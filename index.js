const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3060
const configureDB = require('./config/database')
const router = require('./config/routes')

app.use(express.json())
app.use(cors())

configureDB()
app.use(router)

app.listen(PORT,()=>{
    console.log('server is running on port',PORT)
})
