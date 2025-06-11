
const express = require('express');
const { check } = require('express-validator');
const { validateInput } = require('../middlewares/validateInputs');
const { verifyToken } = require('../middlewares/verifyToken');

const {
    login,
    signUp,
    renewToken
} = require('../controllers/authentication.controllers');


const router = express.Router();

// ENVIAR LOGIN
router.post('/', [
    check("nombre", "nombre es requerido").notEmpty().isString(),
    check("email", "nombre es requerido").notEmpty().isString(),
    check("password", "nombre es requerido").notEmpty().isString(),
    validateInput
], login)


// ENVIAR LOGOUT
// Eliminar token, se gestiona en el front



// ENVIAR REGISTRO
router.post('/signup', [
    check("nombre", "nombre es requerido").notEmpty().isString(),
    check("email", "nombre es requerido").notEmpty().isString(),
    check("password", "nombre es requerido").notEmpty().isString(),
    validateInput
], signUp)


// RENEWTOKEN
// Valida que el token existe y si lo hace, saca otro token
router.get('/renew', verifyToken, /*verificarrole] */ renewToken)


module.exports = router;