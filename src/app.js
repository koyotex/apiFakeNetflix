const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { token } = require('./middleware/session')
const { router } = require('./routes')

const app = express()
const port = process.env.PORT || 80

app.use(cors())
app.use('/', token, router)

app.listen(port, () => {
    console.log(`server is running ${port}`)
})