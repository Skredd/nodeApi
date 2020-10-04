require('module-alias/register')
require('dotenv').config()

const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json())

app.use(require('@routes/index'))

require('./db')

module.exports = app
