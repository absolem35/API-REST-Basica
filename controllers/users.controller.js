const { request, response } = require('express')


const getAllUsers = (req = request, res = response) => {
  const { q, id, apikey, page = 1 } = req.query

  res.send({
    msg: "GET... All Users",
    q,
    id,
    apikey,
    page
  })
}

const insertUser = (req, res) => {
  const { name, age } = req.body
  res.send({
    msg: "POST...Insert User",
    name,
    age
  })
}

const updateUser = (req = request, res = response) => {
  const { id } = req.params
  res.send({
    msg: "PUT...Update User",
    id
  })
}

const deleteUser = (req, res) => {
  res.send('DELETE...Delete User')
}

module.exports = {
  getAllUsers,
  insertUser,
  updateUser,
  deleteUser
}