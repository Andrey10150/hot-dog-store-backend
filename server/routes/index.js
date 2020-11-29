const hotdogsController = require('../controllers').hotdogs

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Hotdogs API!'
    })
  )

  app.post('/api/hotdogs', hotdogsController.create)
  app.get('/api/hotdogs', hotdogsController.list)
  app.put('/api/hotdogs/:hotdogId', hotdogsController.update)
  app.delete('/api/hotdogs/:hotdogId', hotdogsController.destroy)
}
