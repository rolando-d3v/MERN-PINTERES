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
        })
        await user.save()
        console.log(user);
        res.json({ok: true, message: 'user created successfully'})
        
    } catch (error) {
        res.json({ok: false, error})
    }
}


//_*  ENDPOINT PARA OBTENER ALL USERS 
exports.getUsers = async (req, res) => {
    res.json({ok: true})
}


//_*  ENDPOINT PARA OBTENER A USER
exports.getUser = async (req, res) => {
    res.json({ok: true})
}


//_*  ENDPOINT PARA ELIMINAR A USER
exports.getUser = async (req, res) => {
    res.json({ok: true})
}