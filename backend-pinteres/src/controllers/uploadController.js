const imageModel = require("../models/imageModel");

exports.getUpload = (req, res) => {
  res.json({ ok: true, message: "file subido successfully" });
};

//ENPOINT SUBIR FILE A SERVER
exports.postImage = async (req, res) => {
    try {
        const image = new imageModel()
        image.title = req.body.title
        image.description = req.body.description
        image.filename = req.file.filename
        image.path = '/upload/' + req.file.filename
        image.mimetype = req.file.mimetype
        image.size = req.file.size

        res.json({ ok: true, message: "file subido successfully" });
        console.log(image);
 } catch (error) {
     res.send(error)
 }
};

exports.getImage = async (req, res) => {
  // idImage

  res.json({
    ok: true,
    message: "image encontrada successfully",
  });
};

exports.deleteImage = async (req, res) => {
  // idImage
  res.json({ ok: true, message: "file remove successfully" });
};
