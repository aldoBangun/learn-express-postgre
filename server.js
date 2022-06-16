require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 8000
const db = require('./config/database')

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
   res.send('Hello World')
})

app.listen(PORT, () => {
   console.log(`App is running on http://localhost:${PORT}`)
})