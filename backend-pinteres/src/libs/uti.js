const userModel = require('../models/userModel');

exports.createUserRol = async () => {

    const count = await userModel.estimatedDocumentCount()
    if (count > 0) return

    const values = await Promise.all([
      new userModel({
        name: 'prueba',
        email: 'prueba@gmail.com',
        password: '123456',
        estado: true,
        role: 'USER_ROLE',
        numero: 0
      }).save()

    ])

    console.log(values);

}