const express = require('express')
const { getJsonNetflix } = require('./getJsonNetflix')

const app = express()
const port = 80

// app.get('/login/:user$:password', (req, res) => { res.send('login') })

//app.get('/netflix', getJsonNetflix)
app.get('/', (req, res) => {
    res.send('hi')
})

// app.get('/netflix/:id', (req, res) => { res.send('hola') })


app.listen(port, () => {
    console.log('server is running')
})