require('dotenv').config()
require('./db/mongoose')
const { getCurrentDateTime } = require('./utils/utils')

const jwt = require('jsonwebtoken')

const port = process.env.PORT || 3001
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({ origin: "*" }))

app.use(express.json())

app.get('/api/test', (req, res) => {
  res.send({ message: `Hola, esto es un test.` })
})

//rc95 15/06/2023 22:50 - jwt auth...
const secretKey = process.env.JWT_SECRET

app.post('/login', (req, res) => {
  const { username, password } = req.body

  // Validación básica del usuario y contraseña
  if (username === 'admin' && password === 'admin') {
    // Generar el token
    const token = jwt.sign({
      username,
      login: new Date()
    }, secretKey)

    res.send({ token })
  } else {
    res.status(401).send({ error: 'Credenciales inválidas' })
  }
})

app.get('/protegido', (req, res) => {
  const token = req.headers.authorization

  if (!token) {
    res.status(401).send({ error: 'Token no proporcionado' })
  } else {
    // Verificar y decodificar el token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(401).send({ error: 'Token inválido' })
      } else {
        const username = decoded.username
        res.send({ message: `Hola, ${username}! Esta es una ruta protegida.` })
      }
    })
  }
})

// Import routes
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

// Route middleware
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


app.get('/*', (req, res) => {
  res.status(404).send()
})

app.listen(port, () => {
  console.log(getCurrentDateTime() + ` *** Server listening at http://localhost:${port}/`)
  // require('./db/pre_poblar').ejecutar()
})