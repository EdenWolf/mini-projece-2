const mongoose = require('mongoose')
const MenuSchema = require('./MenuSchema')

module.exports = mongoose.model('Menu', MenuSchema)
