const { verifyToken } = require('../config')
const { usersController } = require('../controllers')

const router = require('express').Router()

router.get('/', verifyToken, usersController.getAll)

module.exports = router