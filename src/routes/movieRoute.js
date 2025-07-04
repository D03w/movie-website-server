const { verifyToken } = require('../config')
const { movieController } = require('../controllers')
const upload = require('../middleware/upload')
const router = require('express').Router()


router.post('/', verifyToken, upload.fields([
    {name: 'photo', maxCount: 1},
    {name: 'trailer', maxCount: 1},
]), movieController.movieCreate)
router.get('/', movieController.getMovie)
router.get('/one/:id', movieController.getOne)
router.put('/:id', upload.fields([
    {name: "photo", maxCount: 1},
    {name: "trailer", maxCount: 1}
]), movieController.updateMovies)


module.exports = router