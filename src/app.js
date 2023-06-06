require('dotenv').config()
require('./db/mongoose')
const { getCurrentDateTime } = require('../utils/utils')

const port = process.env.PORT || 3001
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({ origin: "*" }))

app.use(express.json())

// Import routes
const continentesRouter = require('./routes/continentesRouter')
const paisesRouter = require('./routes/paisesRouter')
const estadosRouter = require('./routes/estadosRouter')
const ciudadesRouter = require('./routes/ciudadesRouter')

// Route middleware
app.use("/api/continentes", continentesRouter)
app.use("/api/paises", paisesRouter)
app.use("/api/estados", estadosRouter)
app.use("/api/ciudades", ciudadesRouter)

app.get('/*', (req, res) => {
  res.status(404).send()
})

app.listen(port, () => {
  console.log(getCurrentDateTime() + ` *** Server listening at http://localhost:${port}/`)
  // require('./db/pre_poblar').ejecutar()
})