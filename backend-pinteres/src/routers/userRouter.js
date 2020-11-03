const {Router} = require('express');


//MIDDLEWARE
const {verificaToken} = require('../middlewares/authToken')
 

//ROUTES
const {createUser, getUsers, getUserId, updateUserId, deleteUserId} = require('../controllers/userController')

const router = Router()
router.post('/user', createUser)
router.get('/user', verificaToken, getUsers)
router.get('/user/:idUser', getUserId)
router.put('/user/:idUser', updateUserId)
router.delete('/user/:idUser', deleteUserId)


module.exports = router