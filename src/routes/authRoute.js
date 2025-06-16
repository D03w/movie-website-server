const { authController } = require('../controllers')
const upload = require('../middleware/upload')
const router = require('express').Router()

router.post('/login', upload.none(), authController.login)
router.post('/register', upload.none(), authController.register)
router.get('/get-me/:id', authController.getMe)

module.exports = router