
const express = require('express');
const {isAdmin} = require('../middlewares/isAdmin');
const {getInAdmin} = require('../controllers/admin.controllers');

// Instanciamos la clase Router
const router = express.Router();

// ENTRAR EN ADMIN
router.get('/dashboard', isAdmin, getInAdmin);


module.exports = router;