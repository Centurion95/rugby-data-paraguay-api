const { Router } = require('express')
const thisRouter = Router()

const {
  get_all,
  get_one_by_id,
  insert_one,
  update_one_by_id,
  delete_one_by_id,
  get_all_by_year,
} = require('../controllers/torneosController.js')


thisRouter.get('/', get_all)
thisRouter.get('/:id', get_one_by_id)
thisRouter.post('/', insert_one)
thisRouter.patch('/:id', update_one_by_id)
// thisRouter.delete('/:id', delete_one_by_id)
thisRouter.get('/by_year/:year', get_all_by_year)

module.exports = thisRouter  