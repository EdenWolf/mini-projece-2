const mongoose = require('mongoose')
const Restaurant = require('./Restaurant')
const conect = async () => {
  await mongoose.connect(
    'mongodb+srv://igal:asdf@cluster0.pyhwsxc.mongodb.net/?retryWrites=true&w=majority'
  )
}

const findAllRestaurant = async () => {
  const data = await Restaurant.find({})
  return data
}

const findRestaurant = async (x) => {
  const data = await Restaurant.find({ x })
  return data
}

const saveRestaurant = async (data, index) => {
  const rest = await new Restaurant(data)
  await rest.save(function (err, rest) {
    if (err) return console.error(err)
  })
}

const closeDb = () => {
  mongoose.connection.close()
}

module.exports = {
  closeDb,
  saveRestaurant,
  findAllRestaurant,
  conect,
  findRestaurant,
}
