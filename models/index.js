require('dotenv').config()
// connect to mongoDB
const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log('DB connected'))
.catch(err => console.error(err))

// shortcut to mongoose.connection object???
module.exports.Place = require('./places')