const mongoose = require('mongoose')

const Customer = new mongoose.Schema({
  name: String
})

module.exports = mongoose.model('Customer', Customer)
