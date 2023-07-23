// require mongoose
const mongoose = require('mongoose')

// create a schema (pattern, blueprint) for the data
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  established: Number
})

module.exports = mongoose.model('Place', placeSchema)

