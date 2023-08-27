const { Router } = require('express')
const thisRouter = Router()

const {
  get_all,
  insert_one,
} = require('../controllers/webVisitController.js')

thisRouter.get('/', get_all)
thisRouter.post('/', insert_one)

module.exports = thisRouter  