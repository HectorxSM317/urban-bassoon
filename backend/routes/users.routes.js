const userRouter = require('express').Router()
const usersControllers = require('../controllers/usersControllers')
const { validateUser } = require('../middlewares/validateUser')
const { validateAdmin } = require('../middlewares/validateAdmin')
const { loginValidator, registerValidator } = require('../middlewares/userValidator')



userRouter.post('/register', validateUser, validateAdmin, registerValidator, usersControllers.register)
userRouter.post('/login', loginValidator , usersControllers.login)
userRouter.get('/loginToken', validateUser, usersControllers.loginToken)

module.exports = { userRouter }