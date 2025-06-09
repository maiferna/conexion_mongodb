
const {Schema, model} = require('mongoose');

const User = Schema({
    nombre: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = model('usuario', User);