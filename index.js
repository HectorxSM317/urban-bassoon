const express = require('express')
const app = express()
const router = require('./routes') 
const { initSequelize } = require('./config/database')
require('./models/Employee')


app.use(express.json())
initSequelize()


app.use('/api', router)

app.listen(4000 ,() => console.log(`Servidor corriendo en puerto 4000`))