const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./server/routes')(app)

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  })
)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
})

module.exports = app
