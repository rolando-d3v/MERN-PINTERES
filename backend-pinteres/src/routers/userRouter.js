const {Router} = require('express');

//MIDDLEWARE
const {verificaToken, token_ADMIN_ROLE, token_SEN_ROLE} = require('../middlewares/authToken')
 
//ROUTES
const {createUser, getUsers, getUserId, updateUserId, deleteUserId} = require('../controllers/userController')

const router = Router()
router.post('/user', createUser)
router.get('/user', verificaToken, token_SEN_ROLE, getUsers)
router.get('/user/:idUser', getUserId)
router.put('/user/:idUser', updateUserId)
router.delete('/user/:idUser', deleteUserId)


module.exports = router