const Collection = require('../models/contact_type')

const thisController = {
  get_all: async (req, res) => {
    try {
      const documents = await Collection.find({ archived: false }) //unarchived only
      res.status(200).send(documents)
    } catch (error) {
      res.status(500).send()
    }
  },
  get_one_by_id: async (req, res) => {
    const _id = req.params.id
    try {
      // const document = await Collection.findOne({ _id, id_user: req.user._id })
      const document = await Collection.findOne({ _id })
      if (!document) {
        return res.status(404).send()
      }
      res.status(200).send(document)
    } catch (error) {
      res.status(500).send(error)
    }
  },
  insert_one: async (req, res) => {
    const document = new Collection({
      ...req.body,
    })
    try {
      await document.save()
      res.status(201).send(document)
    } catch (error) {
      res.status(500).send(error)
    }
  },
  update_one_by_id: async (req, res) => {
    if (req.body.archived) { //si es para archivar, guardamos la fecha/hora actual..
      req.body = { ...req.body, archivedAt: new Date() }
    }

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'archived', 'archivedAt']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
      return res.status(404).send({ error: 'Invalid fields update!' })
    }

    const _id = req.params.id
    try {
      // const document = await Collection.findOne({ _id, id_user: req.user._id })
      const document = await Collection.findOne({ _id })

      if (!document) {
        return res.status(404).send()
      }

      updates.forEach((update) => document[update] = req.body[update])
      await document.save()

      res.send(document)
    } catch (error) {
      res.status(500).send(error)
    }
  },
  // delete_one_by_id: async (req, res) => {
  //     const _id = req.params.id
  //     try {
  //         // const document = await Collection.findOneAndDelete({ _id, id_user: req.user._id });
  //         const document = await Collection.findOneAndDelete({ _id });
  //         if (!document) {
  //             return res.status(404).send()
  //         }
  //         res.send(document)
  //     } catch (error) {
  //         res.status(500).send(error)
  //     }
  // },
}

module.exports = thisController 