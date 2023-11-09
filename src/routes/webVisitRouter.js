const { Router } = require('express')
const thisRouter = Router()

const {
  get_all,
  insert_one,
  get_reporte,
} = require('../controllers/webVisitController.js')

thisRouter.get('/', get_all)
thisRouter.post('/', insert_one)
thisRouter.get('/reporte', get_reporte)

module.exports = thisRouter  