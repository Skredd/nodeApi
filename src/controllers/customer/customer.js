const service = require('@services/customer/customer')

function createCustomer (req, res) {
  const { name } = req.body
  return service.createCustomer(name)
    .then(() => res.json({ message: `Customer ${name} created` }))
}

function getCustomer (req, res) {
  return service.findAll()
    .then((docs) => res.send(docs))
}

function getByName (req, res) {
  const { name } = req.params
  return service.findByName(name)
    .then((doc) => {
      res.send(doc)
    })
}

function deleteCustomer (req, res) {
  const { name } = req.params
  return service.deleteByName(name)
    .then(() => res.json({ message: 'Customer delete' }))
    .catch((err) => res.json({ err: `${err.message}` }))
}

module.exports = {
  createCustomer,
  getCustomer,
  getByName,
  deleteCustomer
}
