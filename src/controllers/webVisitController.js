const Collection = require('../models/web_visit')

const thisController = {
  get_all: async (req, res) => {
    try {
      const documents = await Collection
        .find({ archived: false })

      res.status(200).send(documents)
    } catch (error) {
      res.status(500).send()
    }
  },
  insert_one: async (req, res) => {
    // const visitor_ip = req.ip //no funciona, retorna siempre "127.0.0.1"
    const visitor_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const visitor_user_agent = req.get('User-Agent')

    const document = new Collection({
      ...req.body,
      visitor_ip,
      visitor_user_agent,
    })
    try {
      await document.save()
      res.status(201).send(document)
    } catch (error) {
      res.status(500).send(error)
    }
  },
}

module.exports = thisController 