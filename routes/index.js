const employeesControllers = require('../controllers/employeesControllers')
const router = require('express').Router()



router.get('/employee', employeesControllers.getEmployees)
router.post('/employee/create', employeesControllers.createEmployee)
router.post('/employee/delete/:id', employeesControllers.deleteEmployee)
router.post('/employee/modify/:id', employeesControllers.modifyEmployee)

module.exports = router