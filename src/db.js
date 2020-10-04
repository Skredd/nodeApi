const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/teste', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err
  console.log('Database connected')
})

const db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error'));

// db.once('open', () => {
//     console.log('connected')
// });

module.exports = db
