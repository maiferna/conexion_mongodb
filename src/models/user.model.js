
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
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['admin', 'user']
    }
    // enum: Array, creates a validator that checks if the value is in the given array.
})

// Se exporta en plural, porque las colecciones tienen que estar en plural
module.exports = model('Users', User);