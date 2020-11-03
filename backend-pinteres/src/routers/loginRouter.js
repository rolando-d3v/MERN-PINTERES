const {Router} = require('express');

const router = Router()
const {loginUser } = require('../controllers/loginController')

router.post('/login' , loginUser )

module.exports = router