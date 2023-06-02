const express = require('express')
const cors = require('cors')

class Server {

  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usersEndPoint = '/api/users'

    this.middlewares()

    this.routes()
  }

  middlewares() {

    this.app.use(cors())

    this.app.use(express.json())

    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usersEndPoint, require('../routes/users.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Run in port: ${this.port}`);
    })
  }
}

module.exports = Server