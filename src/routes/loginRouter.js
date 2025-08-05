const { Router } = require('express')
const thisRouter = Router()

const { check_login, update } = require('../controllers/loginController.js')

const jwt = require('jsonwebtoken')

thisRouter.post('/', check_login)

thisRouter.get('/protegido', (req, res) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).send({ error: 'Token no proporcionado' })
  }
  console.log('token', token)
  console.log('secretKey', process.env.JWT_SECRET)
  // Verificar y decodificar el token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({ error: 'Token inválido' })
    } else {
      res.send({ message: `Hola, ${decoded.name}! Esta es una ruta protegida.` })
    }
  })
})

thisRouter.put('/:_id', update); //rc95 05/08/2025 02:47

module.exports = thisRouter  