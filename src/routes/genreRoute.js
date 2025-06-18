const { verifyToken } = require('../config')
const { genreController } = require('../controllers')
const upload = require('../middleware/upload')

const router = require('express').Router()

router.post('/', verifyToken, upload.single('photo'), genreController.createGenre)
router.get('/', genreController.getGenre)
router.get('/one/:id', genreController.getOne)
router.delete('/:id', genreController.deleteGenre)
router.put('/:id', verifyToken, upload.none(), genreController.updateGenre)

module.exports = router