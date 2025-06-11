
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createToken } = require('../utils/createToken');

// LOGIN
const login = async (req, res) => {
    // TODO: recoger datos del body
    // Comprobar si el usuario existe
    // si no existe --> retornar estado 403
    // si existe --> comprobar si la contraseña coincide (en la documentación de bcrypt está el método compareSync)
    // si no coincide --> 403
    // si existe --> crear token, devolver 202 usuario y token
    // bcrypt.comparesync (password, usuario.password)


    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(403).json({
                ok: false,
                msg: "El usuario no existe."
            })
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(403).json({
                ok: false,
                msg: "La contraseña no existe."
            })
        }
        const token = createToken(user._id, user.role);
        return res.status(202).json({
            ok: true,
            user,
            token
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador.'
        })
    }
}

// REGISTRO
const signUp = async (req, res) => {
    // TODO: traer datos del body (req.body)
    // comprobar si el usuario ya existe
    // si existe --> retornamos estado 403
    // si no existe --> encriptar contraseña, añadir a la bbdd (con save), crear token, retornar 200

    const { nombre, email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(403).json({
                ok: false,
                msg: "El usuario ya está registrado."
            })
        }

        // encriptar contraseña
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);

        // añadir a la bbdd
        const usuario = new User({ nombre, email, password: encryptedPassword });
        const savedUser = await usuario.save();

        // crear token payload, secretOrPrivateKey, [options, callback]
        const token = createToken(savedUser._id, savedUser.role);

        return res.status(201).json({
            ok: true,
            savedUser,
            token
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Contacte con el administrador."
        })
    }
}

// RENEWTOKEN
const renewToken = async (req, res) => {
    // TODO: Obtener usuario
    // Comprobar que hay token y que sea válido
    // si no lo hay --> retornar 403
    // si lo hay --> generar otro token
    
    const uid = req.uid;
    const role = req.role;

    const newToken = createToken(uid, role);

    return res.status(201).json({
        ok: true,
        newToken
    })
}

module.exports = {
    login,
    signUp,
    renewToken
}