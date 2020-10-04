const router = require('express').Router()
const ctrl = require('@controllers/customer/customer')

router.post('/new', ctrl.createCustomer)

router.get('/customers', ctrl.getCustomer)

router.get('/customer/:name', ctrl.getByName)

router.delete('/delete/:name', ctrl.deleteCustomer)

module.exports = router
