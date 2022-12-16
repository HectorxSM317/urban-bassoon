const employeeRouter = require('express').Router()
const employeesControllers = require('../controllers/employeesControllers')
const { validateUser } = require('../middlewares/validateUser')
const { validateAdmin } = require('../middlewares/validateAdmin')

employeeRouter.get('/', validateUser, validateAdmin, employeesControllers.getEmployees)
employeeRouter.post('/create', validateUser, validateAdmin, employeesControllers.createEmployee)
employeeRouter.post('/delete/:id', validateUser, validateAdmin, employeesControllers.deleteEmployee)
employeeRouter.post('/modify/:id', validateUser, validateAdmin, employeesControllers.modifyEmployee)

module.exports = { employeeRouter }