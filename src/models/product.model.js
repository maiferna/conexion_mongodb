
// Crear modelo de producto (es uno, un modelo del registro, del producto)

//const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

// Exporta una clase (?). Instanciamos un objeto de la clase. Con el objeto de Schema estamos pasándole los argumentos al método constructor. El esquema lo utilizaremos en el controlador.
const Product = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String, 
        required: true
    },
    categoria: {
        type: String, 
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

// model es lo mismo que mongoose.model porque está desestructurado
module.exports = model('productos', Product)