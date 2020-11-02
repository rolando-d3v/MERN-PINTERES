const {Schema, model} = require('mongoose');


const rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUES} El role no es valido ' 
}

const userSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true, lowercase: true},
    password:{type: String, required: true},
    estado:{type: Boolean, default: true},
    role:{type: String, default: 'USER_ROLE', enum: rolesValidos },
}, {timestamps: true})


// //FUNCION PARA NO MOSTRAR EL PASSWORD EN EL JSON DEL BACK-END
// userSchema.methods.toJSON = function() {
//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.password;
  
//     return userObject;
//   }
  



module.exports = model('User', userSchema)