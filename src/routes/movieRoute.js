const { verifyToken } = require('../config')
const { movieController } = require('../controllers')
const upload = require('../middleware/upload')
const router = require('express').Router()


router.post('/', verifyToken, upload.fields([
    {name: 'photo', maxCount: 1},
    {name: 'trailer', maxCount: 1},
]), movieController.movieCreate)


module.exports = router