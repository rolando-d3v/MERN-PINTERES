const {Router} = require('express');

const {getUpload, postImage, deleteImage, getImage} = require('../controllers/uploadController')
const upload = require('../middlewares/multer')

//ROUTES
const router = Router()
router.get('/upload' , getUpload )
router.post('/upload', upload.single("image") , postImage )
router.get('/image/:idImage' , getImage )
router.get('/image/:idImage/delete' , deleteImage )

module.exports = router