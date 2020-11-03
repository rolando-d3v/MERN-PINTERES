const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//-* LOGIN CON EMAIL Y PASS  Y AGREGANDO UN TOKEN AL USER
exports.loginUser = async (req, res) => {
  try {
    const userEmail = await userModel.findOne({ email: req.body.email });

    //si existe email
    if (!userEmail) {
      res.json({ ok: false, message: "Error: el email no existe" });
    }

    const pass = await bcrypt.compare(req.body.password, userEmail.password);
    if (!pass) {
      res.json({ ok: false, message: "Error: el password es incorrecto" });
    } else {
      const token = jwt.sign(
        {
          id: userEmail._id,
          name: userEmail.name,
          email: userEmail.email,
          role: userEmail.role,
          estado: userEmail.estado,
        },
        process.env.SECRET,
        {
          expiresIn: 60 * 60 * 10,
        }
      );

      res.json({ ok: true, message: "Success: Login correcto", token });
    }
  } catch (error) {
    res.json({ ok: false, error });
  }
};
