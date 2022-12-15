const vacationsControllers = require('../controllers/vacationsControllers')
const { validateUser } = require('../middlewares/validateUser')
const vacationsRouter = require('express').Router()

vacationsRouter.post('/request', validateUser, vacationsControllers.vacationsRequest)



module.exports = { vacationsRouter }