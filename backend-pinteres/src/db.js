const mongoose = require("mongoose");

require('./config')

mongoose.connect(process.env.URLDB,
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  () => {
    console.log("server mongodb connect")
  }
);
