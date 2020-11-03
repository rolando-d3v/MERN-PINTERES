const {Router} = require('express');

const router = Router()
const {createUser, getUsers, getUserId, updateUserId, deleteUserId} = require('../controllers/userController')

router.post('/user', createUser)
router.get('/user', getUsers)
router.get('/user/:idUser', getUserId)
router.put('/user/:idUser', updateUserId)
router.delete('/user/:idUser', deleteUserId)


module.exports = router