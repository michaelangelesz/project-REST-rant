// connect to mongoDB
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

// shortcut to mongoose.connection object???
module.exports.Place = require('./places')