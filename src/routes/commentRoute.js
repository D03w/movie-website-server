const { verifyToken } = require('../config')
const { commentController } = require('../controllers')
const upload = require('../middleware/upload')

const router = require('express').Router()

router.get('/one/:id', commentController.getOne)
router.post('/', verifyToken, upload.none(), commentController.create)
router.put('/:id', verifyToken, commentController.update)
router.delete('/:id', verifyToken, commentController.deleteComment)

module.exports = router