const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    title: String,
    description: {
      type: String,
      default: "producto x",
    },
    filename: { type: String },
    path: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    //ponerle la fecha actual por defecto con     Date.now()
    create_at: {type: Date, default: Date.now()}
  },
  { timestamps: true }
);

module.exports = model("Image", imageSchema);
