const Collection = require('../models/web_visit')
const { getFormatedDate_from_ISO_8601 } = require('../utils/utils')
const _ = require('lodash')

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
  get_reporte: async (req, res) => {
    try {
      const documents = await Collection
        .find({ archived: false })
        .select('createdAt')

      // console.log('documents', documents)
      const formattedAndGroupedDates = formatAndGroupDates(documents)
      // console.log('formattedAndGroupedDates', formattedAndGroupedDates)


      res.status(200).send(formattedAndGroupedDates)
    } catch (error) {
      console.error('error', error)
      res.status(500).send()
    }
  },
}

// Función para formatear la fecha y agregar un contador
const formatAndGroupDates = (documents) => {
  const formattedDates = documents.map((document) => ({
    ...document,
    createdAt: getFormatedDate_from_ISO_8601(document.createdAt)
  }))

  const groupedDates = _.groupBy(formattedDates, 'createdAt')

  const result = Object.entries(groupedDates).map(([fecha, values]) => ({
    fecha,
    cantidad: values.length
  }))

  return result
}

module.exports = thisController 