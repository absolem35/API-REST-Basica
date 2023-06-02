const { Router } = require('express')
const { getAllUsers, insertUser, updateUser, deleteUser } = require('../controllers/users.controller')
const route = Router()

route.get('/', getAllUsers)

route.post('/', insertUser)

route.put('/:id', updateUser)

route.delete('/', deleteUser)

module.exports = route