const { Card } = require('../models')

module.exports = {
  async getAllCards (req, res) {
    try {
      let card = null
      const search = req.query.search
      if (req.query.search) {
        card = await Card.findAll({
          where: {
            $or: [
              'term', 'answer'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        card = await Card.findAll({
          limit: 100
        })
      }
      res.send(card)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to list Cards'
      })
    }
  },
  async getCard (req, res) {
    try {
      const card = await Card.findById(parseInt(req.params.id))
      res.send(card)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show a Card'
      })
    }
  },
  async post (req, res) {
    try {
      const card = await Card.create(req.body)
      res.send(card)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create a Card'
      })
    }
  },
  async put (req, res) {
    try {
      const card = await Card.update(req.body, {
        where: {
          id: parseInt(req.params.id)
        }
      })
      res.send(card)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update a Card'
      })
    }
  },
  async deleteCard (req, res) {
    try {
      await Card.destroy({
        where: {
          id: parseInt(req.params.id)
        }
      })
      res.send('OK')
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete a Card'
      })
    }
  }
}
