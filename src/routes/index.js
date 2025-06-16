var express = require('express');
var router = express.Router();

router.use('/movie', require('./movieRoute'))
router.use('/auth', require('./authRoute'))
router.use('/users', require('./usersRoute'))
router.use('/genre', require('./genreRoute'))

module.exports = router;
