const express = require("express");
const morgan = require("morgan");
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

//ROUTERS
app.use("/", require("./routers/uploadRouter"));
