const {Router} = require('express');

const {getUpload, postImage, deleteImage, getImage} = require('../controllers/uploadController')

//ROUTES
const router = Router()
router.get('/upload' , getUpload )
router.post('/upload' , postImage )
router.get('/image/:idImage' , getImage )
router.get('/image/:idImage/delete' , deleteImage )

module.exports = router