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
        _id: document._id, //rc95 05/08/2025 02:27
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

  //rc95 05/08/2025 02:50 - actualiza usuario, incluyendo cambio de password
  update: async (req, res) => {
    try {
      if (req.body.archived) { //si es para archivar, guardamos la fecha/hora actual..
        req.body = { ...req.body, archivedAt: new Date() }
      }

      const update = { ...req.body };
      if (req.body.passwordNueva) {
        const { username, passwordActual, passwordNueva } = req.body;
        const document = await Collection.findOne({ username, password: passwordActual });
        if (!document) return res.status(401).json({ error: 'La contraseña actual ingresada es incorrecta' });
        update.password = passwordNueva;
      }

      const document = await Collection.findOneAndUpdate(
        { _id: req.params._id },
        update,
      );
      if (!document) return res.status(404).json({ error: 'No encontrado' });
      res.json(document);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
}

module.exports = thisController 