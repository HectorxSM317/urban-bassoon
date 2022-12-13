const router = require('express').Router()
require('../models/Employee')

router.get('/employee', () => console.log('No hay empleados'))

module.exports = router