const mongoose = require('mongoose')
const MenuSchema = require('./MenuSchema')

// const Menu = mongoose.model('Menu', MenuSchema)

const RestaurantSchema = new mongoose.Schema({
  track_id: String,
  title: String,
  city: String,
  url: String,
  filters: [String],
  image: {
    blurhash: String,
    url: String,
    variants: [String],
  },
  address: String,
  location: [mongoose.Decimal128],
  name: String,
  index: Number,
  menu: [MenuSchema],
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = Restaurant
