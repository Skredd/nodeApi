const Customer = require('@models/customer')

function createCustomer (name) {
  const customer = new Customer({
    name: name
  })
  return customer.save()
}

function findAll () {
  return Customer.find()
}

function findByName (name) {
  return Customer.findOne({ name: name })
}

function deleteByName (name) {
  return Customer.deleteOne({ name: name })
}

module.exports = {
  createCustomer,
  findAll,
  findByName,
  deleteByName
}
