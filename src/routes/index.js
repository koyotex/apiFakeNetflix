const router = require('express').Router()

router.use('/netflix', require('./netflix.js'))

module.exports = { router } 