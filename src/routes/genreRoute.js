const { verifyToken } = require('../config')
const { genreController } = require('../controllers')
const upload = require('../middleware/upload')

const router = require('express').Router()

router.post('/', verifyToken, upload.single('photo'), genreController.createGenre)
router.get('/', genreController.getGenre)
router.delete('/:id', genreController.deleteGenre)

module.exports = router