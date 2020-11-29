const Hotdog = require('../models').Hotdog

module.exports = {
  create(req, res) {
    const { name, price, description, image } = req.body

    return Hotdog.create({
      name,
      price,
      description,
      image
    })
      .then(hotdog => res.status(201).send(hotdog))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Hotdog.findAll()
      .then(hotdogs => res.status(200).send(hotdogs))
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
    return Hotdog.findByPk(req.params.hotdogId)
      .then(hotdog => {
        if (!hotdog) {
          return res.status(404).send({
            message: 'Hotdog Not Found'
          })
        }

        const { name, price, description, image } = req.body

        return hotdog
          .update({
            name: name || hotdog.name,
            price: price || hotdog.price,
            description: description || hotdog.description,
            image: image || hotdog.image
          })
          .then(() => res.status(200).send(hotdog)) // Send back the updated hotdog.
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },
  destroy(req, res) {
    return Hotdog.findByPk(req.params.hotdogId)
      .then(hotdog => {
        if (!hotdog) {
          return res.status(400).send({
            message: 'Hotdog Not Found'
          })
        }
        return hotdog
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}
