
const router = require('express').Router()
const { employeeRouter } = require('./employee.routes')
const { userRouter } = require('./users.routes')
const { vacationsRouter } = require('./vacations.routes')



router.use('/employee', employeeRouter)
router.use('/user', userRouter)
router.use('/vacations', vacationsRouter)


module.exports = router