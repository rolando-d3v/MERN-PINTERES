const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');


//_*  ENDPOINT PARA CREATED USER 
exports.createUser = async (req, res) => {
  try {
    const user = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      estado: req.body.estado,
      role: req.body.role,
    });

    // si existe email
    const existeEmail = await userModel.findOne({ email: req.body.email });
    if (existeEmail) {
      res.json({ ok: false, message: "el email ya existe" });
    } else {
      await user.save();
      console.log(user);
      res.json({ ok: true, message: "user created successfully" });
    }
  } catch (error) {
    res.json({ ok: false, error });
  }
};

//_*  ENDPOINT PARA OBTENER ALL USERS
exports.getUsers = async (req, res) => {
  try {
    let limit = parseInt(req.query.limit) || 2;
    let page = parseInt(req.query.page) || 1;
    const user = await userModel.paginate({estado: true}, { limit, page });
    res.json(user);
  } catch (error) {
    res.json({ ok: false, error });
  }
};


//_*  ENDPOINT PARA OBTENER A USER
exports.getUserId = async (req, res) => {
    try {
      const user = await userModel.findById({ _id: req.params.idUser });
      if (!user) {
        res.json({ ok: false, message: "el user no existe" });
      } else {
        res.json({ ok: true, user });
      }
    } catch (error) {
      res.json({ ok: false, error });
    }
}


//_*  ENDPOINT PARA UPDATE A USER
exports.updateUserId = async (req, res) => {
    res.json({ok: true})
}


//_*  ENDPOINT PARA ELIMINAR A USER
exports.deleteUserId = async (req, res) => {
    try {
      const user = await userModel.findOneAndUpdate(
        { _id: req.params.idUser },
        { estado: false },
        { new: true }
      );

      //valida si el user existe
      if (!user) {
        res.json({ ok: false, message: `el user no existe` });
      } else {
        res.json({ ok: true, message: `el user ${user.name} ha sido eliminado` });
      }
      
    } catch (error) {
      res.json({ ok: false, error });
    }
}