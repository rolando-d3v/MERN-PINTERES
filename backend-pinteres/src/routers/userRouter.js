const {Router} = require('express');

const router = Router()
const {createUser, getUsers, getUser, updateUser, deleteUser} = require('../controllers/userController')

router.post('/user', createUser)
router.get('/user', getUsers)
router.get('/user/:idUser', getUser)
router.put('/user/:idUser', updateUser)
router.delete('/user/:idUser', deleteUser)


module.exports = router