const imageModel = require("../models/imageModel");

//ENDPOINT PARA OBTENER TODAS LAS IMAGENES
exports.getImages = async  (req, res) => {
  try {
    const image = await imageModel.find({})
    res.json(image)
  } catch (error) {
    res.send(error)
  }
};

//ENPOINT SUBIR FILE A SERVER
exports.postImage = async (req, res) => {
  try {
    const image = new imageModel();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = "/uploads/" + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    res.json({ ok: true, message: "file subido successfully" });
    console.log(image);
    await image.save();
  } catch (error) {
    res.json({ ok: false, err: error });
  }
};

// OBTENER UNA  SOLA IMAGEN
exports.getImage = async (req, res) => {
  try {
   const image = await imageModel.findById({_id: req.params.idImage})
   res.json({
    ok: true,
    image
  });
  } catch (error) {
    res.send(error)
  }
};


//DELETE UNA IMAGEN
exports.deleteImage = async (req, res) => {
  try {
    const image = await imageModel.findOneAndDelete({
      _id: req.params.idImage,
    });
    res.json({ ok: true, message: `image  ${image.title} delete ` });
  } catch (error) {
    res.send(error);
  }
};
