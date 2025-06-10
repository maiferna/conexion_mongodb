
const {Schema, model} = require('mongoose');

const User = new Schema({
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
    },
    //TODO: añadir role tipo String, required, default 'user' --> mirar cómo meter diferentes roles
})

// Se exporta en plural, porque las colecciones tienen que estar en plural
module.exports = model('Users', User);