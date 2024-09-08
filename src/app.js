require('dotenv').config()
require('./db/mongoose')
const { getCurrentDateTime } = require('./utils/utils')

const port = process.env.PORT || 3001
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({ origin: "*" }))

app.use(express.json())

app.get('/api/test', (req, res) => {
  res.send({ message: `Hola, esto es un test.` })
})


// Import routes
const loginRouter = require('./routes/loginRouter')

const continentesRouter = require('./routes/continentesRouter')
const paisesRouter = require('./routes/paisesRouter')
const estadosRouter = require('./routes/estadosRouter')
const ciudadesRouter = require('./routes/ciudadesRouter')
const clubesRouter = require('./routes/clubesRouter')

const tiposContactoRouter = require('./routes/tiposContactoRouter')
const tiposIdentificadorRouter = require('./routes/tiposIdentificadorRouter')
const personasRouter = require('./routes/personasRouter')
const jugadoresRouter = require('./routes/jugadoresRouter')
const torneosRouter = require('./routes/torneosRouter')
const torneoDetallesRouter = require('./routes/torneoDetallesRouter')
const estadiosRouter = require('./routes/estadiosRouter')

const webVisitRouter = require('./routes/webVisitRouter')

// Middleware para verificar el token JWT
const jwt = require('jsonwebtoken')
function verificarToken(req, res, next) {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).send({ mensaje: 'Token no proporcionado' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.username = decoded.username // Guarda la información del usuario en el objeto de solicitud
    next() // Continúa con el siguiente middleware o la ruta
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido' })
  }
}

// Aplica el middleware a todas las rutas bajo "/api/continentes"
app.use('/api/continentes', verificarToken)
app.use('/api/paises', verificarToken)
app.use('/api/estados', verificarToken)
app.use('/api/ciudades', verificarToken)
app.use('/api/clubes', verificarToken)

app.use('/api/tipos_contacto', verificarToken)
app.use('/api/tipos_identificador', verificarToken)
app.use('/api/personas', verificarToken)
app.use('/api/jugadores', verificarToken)

// app.use('/api/torneos', verificarToken)
// app.use('/api/torneo_detalles', verificarToken)
app.use('/api/estadios', verificarToken)


// Route middleware
app.use("/api/login", loginRouter)
app.use("/api/continentes", continentesRouter)
app.use("/api/paises", paisesRouter)
app.use("/api/estados", estadosRouter)
app.use("/api/ciudades", ciudadesRouter)
app.use("/api/clubes", clubesRouter)

app.use("/api/tipos_contacto", tiposContactoRouter)
app.use("/api/tipos_identificador", tiposIdentificadorRouter)
app.use("/api/personas", personasRouter)
app.use("/api/jugadores", jugadoresRouter)

app.use("/api/torneos", torneosRouter)
app.use("/api/torneo_detalles", torneoDetallesRouter)
app.use("/api/estadios", estadiosRouter)

app.use("/api/web_visit", webVisitRouter)

app.get('/*', (req, res) => {
  res.status(404).send()
})

app.listen(port, () => {
  console.log(getCurrentDateTime() + ` *** Server listening at http://localhost:${port}/`)
  // require('./db/pre_poblar').ejecutar()
})