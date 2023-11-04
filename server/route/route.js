const express = require('express')
const router = express.Router()
const {postRegister,postLogin} = require('../controller/controller')


router.post('/Sign', postRegister)
router.post('/form', postLogin)


module.exports = router