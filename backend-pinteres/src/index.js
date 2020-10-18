const express = require("express");
const multer = require("multer");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {v4: uuidv4} = require("uuid");
const cors = require("cors");


//DB MONGODB
require("./db");

//SERVER APP
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server on port " + port);
});

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

//MIDDLEWARE MULTER PARA SUBIR FILES
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
      let extension = path.extname(file.originalname).toLocaleLowerCase()
    cb(null, uuidv4() + extension);
  }
});

app.use(
   multer({ 
   storage,
   limits: {fileSize: 1000 * 2000},
 }).single("image")
);

//PUBLIC STATIC FILES

//ROUTERS
app.use("/", require("./routers/uploadRouter"));
