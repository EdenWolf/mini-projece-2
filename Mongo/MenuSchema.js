const mongoose = require('mongoose')
const MenuSchema = new mongoose.Schema({
  name: String,
  city: String,
  url: String,
  description: String,
  title: String,
  veagan: Boolean,
  image: String,
})

module.exports = MenuSchema
