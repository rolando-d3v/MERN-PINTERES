const {Router} = require('express');

//MIDDLEWARE
const upload = require('../middlewares/multer')

const {getUpload, postImage, deleteImage, getImage} = require('../controllers/uploadController')

//ROUTES
const router = Router()
router.get('/upload' , getUpload )
router.post('/upload', upload.single("image") , postImage )
router.get('/image/:idImage' , getImage )
router.get('/image/:idImage/delete' , deleteImage )

module.exports = router