
// Necesitamos el componente de node Router. y Router es una clase de express, por lo que hay que llamarlo

const express = require('express');
const {check} = require('express-validator');
const {validateInput} = require('../middlewares/validateInputs');

// Instanciamos la clase Router
const router = express.Router();

const {
    getAllProducts,
    getProductsByCategory,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/public.controllers')


// GET ALL PRODUCTS
// GET: http://localhost:3000/api/v1/productos
// router.get('/productos', /*array de middlewares check... */ , getAllProducts)
router.get('/productos', getAllProducts)

// GET PRODUCTS BY CATEGORY
// GET: http://localhost:3000/api/v1/productos/:categoria
router.get('/productos/:categoria', getProductsByCategory)

// GET PRODUCT BY ID
    // /:id es una variable
    // GET: http://localhost:3000/api/v1/producto/:id
router.get('/producto/:id', getProductById)

// CREATE PRODUCT
// POST: http://localhost:3000/api/v1/productos/:id
router.post('/productos/:id', [
    check("nombre", "nombre es requerido").notEmpty().isString(),
    check("descripcion", "descripcion es requerida").notEmpty().isString(),
    check("categoria", "categoria es requerida").notEmpty().isString(),
    check("precio", "precio es requerido").notEmpty().isNumeric(),
    validateInput
], createProduct)

// UPDATE PRODUCT BY ID
// PUT: http://localhost:3000/api/v1/productos/:id
router.put('/productos/:id', updateProduct)

// DELETE PRODUCT BY ID
// DELETE: http://localhost:3000/api/v1/productos/:id
router.delete('/productos/:id', deleteProduct)



module.exports = router;

// También se podría desestructurar router de express

//const {router} = require('express');
