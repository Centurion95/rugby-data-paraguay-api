const Collection = require('../models/user')
const secretKey = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')

const thisController = {
  check_login: async (req, res) => {
    try {
      const { username, password } = req.body
      // console.log('username', username)
      // console.log('password', password)

      const document = await Collection.findOne({
        username,
        password,
        archived: false
      })

      if (!document) {
        return res.status(401).send({ error: 'Credenciales inválidas' })
      }

      // Generar el token
      const token = jwt.sign({
        username,
        name: document.name,
        es_admin: document.es_admin ?? false,
        login: new Date()
      }, secretKey)

      res.status(200).send({ token })
    } catch (error) {
      res.status(500).send(error)
    }
  },
}

module.exports = thisController 