const {Router} = require('express');

//MIDDLEWARE
const upload = require('../middlewares/multer')

const {getImages, postImage, deleteImage, getImage} = require('../controllers/uploadController')

//ROUTES
const router = Router()
router.get('/image' , getImages )
router.post('/image', upload.single("image") , postImage )
router.get('/image/:idImage' , getImage )
router.get('/image/:idImage/delete' , deleteImage )

module.exports = router