const {Router} = require('express');

//MIDDLEWARE
const upload = require('../middlewares/multer')


//ROUTES
const {getImages, postImage, deleteImage, getImage} = require('../controllers/uploadController')
const router = Router()
router.get('/image' , getImages )
router.get('/image/:idImage' , getImage )
router.post('/image', upload.single("image") , postImage )
router.delete('/image/:idImage' , deleteImage )

module.exports = router