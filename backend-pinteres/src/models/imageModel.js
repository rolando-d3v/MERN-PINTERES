const {Schema, model} = require('mongoose');

const imageSchema = new Schema({
    title: String,
    description: {
        type: String,
        default: 'producto x'
    },
    filename: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = model('Image', imageSchema)