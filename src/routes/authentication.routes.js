
const express = require('express');
const {check} = require('express-validator');
const {validateInput} = require('../middlewares/validateInputs');

const {
    login, 
    logout,
    signUp,
    renewToken
} = require('../controllers/authentication.controllers');

const router = express.Router();

// ENVIAR LOGIN
router.post('/login', /* [
    check("nombre", "nombre es requerido").notEmpty().isString(),
    check("email", "nombre es requerido").notEmpty().isString(),
    check("password", "nombre es requerido").notEmpty().isString()
], */ login)


// ENVIAR LOGOUT
router.post('/logout', logout)


// ENVIAR REGISTRO
router.post('/signup', /* [
    check("nombre", "nombre es requerido").notEmpty().isString(),
    check("email", "nombre es requerido").notEmpty().isString(),
    check("password", "nombre es requerido").notEmpty().isString()
], */ signUp)


// RENEWTOKEN
router.get('/renew', renewToken)


module.exports = router;