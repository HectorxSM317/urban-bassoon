require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes') 
const { initSequelize } = require('./config/database')
const cors = require('cors')
const passport = require('./config/passport')
require('./models/Employee')
require('./models/User')
require('./models/Vacations')

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
initSequelize()


app.use('/api', router)

app.listen(4000 ,() => console.log(`Servidor corriendo en puerto 4000`))