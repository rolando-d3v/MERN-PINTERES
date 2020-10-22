const express = require("express");
const morgan = require("morgan");
const path = require('path');
// const {format} = require('timeago.js');
const bodyParser = require("body-parser");
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

//PUBLIC STATIC FILES
// app.use(express.static('src/public'))
app.use(express.static(path.join(__dirname, 'public' )))

//ROUTERS
app.use("/", require("./routers/uploadRouter"));
