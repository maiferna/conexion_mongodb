const { get } = require("../routes/public.routes")

const Product = require('../models/product.model');

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {

    try {
        const productos = await Product.find()
        return res.status(200).json({
            ok: true,
            productos
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            msg: 'Error al traer los productos'
        })
    }

    // res.json({
    //     msg: 'Getting all products'
    // })
}

// GET PRODUCTS BY CATEGORY
const getProductsByCategory = async (req, res) => {
    try {
        const productos = await Product.find({ category: categoria })
        return res.status(200).json({
            ok: true,
            productos
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            msg: 'Error al traer los productos'
        })
    }

    // res.json({
    //     msg: 'Getting products by category'
    // })
}

// GET PRODUCT BY ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        // TODO: comprobar que el id exista. 404
        const producto = await Product.findOne({ _id: id })
        return res.status(200).json({
            ok: true,
            producto
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador'
        })
    }
    // res.status(200).json({
    //     msg: 'Getting product by id'
    // })
}


// CREATE PRODUCT
const createProduct = async (req, res) => {

    // TODO: comprobar que el producto existe, si ya existe retornar un 404 y no ejecutar lo de abajo

    // Hay que cogerlo del body porque los datos entrarán por el front (?)
    const nuevoProducto = req.body;
    // Va a ser una instancia de Product y le pasamos el nuevo producto como argumento
    const producto = new Product(nuevoProducto);
    try {
        const savedProduct = await producto.save();
        return res.status(201).json({
            ok: true,
            savedProduct
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Póngase en contacto con el administrador'
        })
    }
    // Le pasamos un objeto con las mismas características del modelo Product
    //const nuevoProducto = {
    // nombre: 'producto2',
    // descripcion: 'descripción de producto2',
    // precio: 2000
    //}
    // res.status(201).json({
    //     msg: 'Creating product'
    // })
}

// UPDATE PRODUCT BY ID
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        // TODO: buscar si el id existe, si existe 403, si no existe actualizamos. También con el body 404

        const product = await Product.findByIdAndUpdate(id, body, { new: true });
        // Hay que pasar la actualización capturada desde el body.
        // new: true se utiliza para devolver el objeto actualizado, si no lo ponemos nos devuelve el producto antiguo
        return res.status(201).json({
            ok: true,
            product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Póngase en contacto con el administrador'
        })
    }

    // res.json({
    //     msg: 'Updating product'
    // })
}

// DELETE PRODUCT BY ID
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        // TODO: comprobar si el id existe
        const product = await Product.deleteOne({ _id: id });
        return res.status(201).json({
            ok: true,
            product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Póngase en contacto con el administrador'
        })
    }
    // res.json({
    //     msg: 'Deleting product'
    // })
}

// Exportar un objeto con las funciones a las cuales llamaremos en public.routes.js
module.exports = {
    getAllProducts,
    getProductsByCategory,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}