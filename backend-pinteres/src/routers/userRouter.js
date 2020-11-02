const {Router} = require('express');

const router = Router()
const {createUser, getUsers, getUser} = require('../controllers/userController')

router.post('/user', createUser)
router.get('/user', getUsers)
router.get('/user/idUser', getUser)


module.exports = router