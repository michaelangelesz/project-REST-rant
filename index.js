require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// 404 not found page
app.get('*', (req, res) => {    
    res.status(404).send('404 not found')
})

app.listen(process.env.PORT)
