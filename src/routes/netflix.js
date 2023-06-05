const express = require('express')
//const { token } = require('../middleware/session')
const app = express.Router()
const { getlist, getForId, deleteFromList } = require('../controller/netflix')

app.get('/', getlist)
app.delete('/:id', deleteFromList)
app.get('/:id', getForId)

module.exports = app