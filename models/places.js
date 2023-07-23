// require mongoose
const mongoose = require('mongoose')

// create a schema (pattern, blueprint) for the data
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: '/images/ben-kolde-FFqNATH27EM-unsplash.jpg' },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

