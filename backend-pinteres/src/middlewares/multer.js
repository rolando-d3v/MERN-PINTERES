const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    let extension = path.extname(file.originalname).toLocaleLowerCase();
    //cb(null, `image-${Date.now()}${extension}`);   // forma para guardar con fecha de creacion Date.now()
    cb(null, "image-" + uuidv4() + extension);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000 * 2000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      return cb(null, true);
    } else {
      cb("Error: archivo no valido");
    }
  },
});

module.exports = upload;
